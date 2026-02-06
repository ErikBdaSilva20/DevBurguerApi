import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import authConfig from '../../config/auth.js';
import User from '../models/User.js';
/**
 * SessionController
 * -----------------
 * Responsável por gerenciar a autenticação de usuários (login).
 *
 * Funcionalidade principal:
 * - Autenticar o usuário com email e senha
 * - Gerar um token JWT para sessões autenticadas
 *
 * Fluxo do método store (login):
 * 1. Define um schema de validação com Yup
 *    - email deve ser válido
 *    - password é obrigatório
 *    - não permite campos extras no body (noUnknown + strict)
 * 2. Valida os dados enviados na requisição
 *    - Retorna erro 400 caso a validação falhe
 * 3. Busca o usuário no banco de dados pelo email
 *    - Retorna erro 401 se o usuário não existir
 * 4. Compara a senha enviada com o hash salvo no banco
 *    - Utiliza bcrypt para garantir segurança
 *    - Retorna erro 401 se a senha estiver incorreta
 * 5. Gera um token JWT contendo:
 *    - id do usuário
 *    - flag de administrador
 * 6. Retorna os dados básicos do usuário e o token de autenticação
 *
 * Segurança:
 * - Senhas nunca são armazenadas ou comparadas em texto puro
 * - Autenticação baseada em JWT
 * - Token possui tempo de expiração definido
 *
 * Observações:
 * - Utiliza Yup para validação de entrada
 * - Utiliza bcrypt para criptografia de senhas
 * - Utiliza jsonwebtoken para geração do token
 * - Configurações sensíveis (secret) ficam fora do controller
 */

class SessionController {
  async store(req, res) {
    try {
      const schema = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
      })
        .noUnknown(true)
        .strict(true);

      await schema.validate(req.body, { abortEarly: false });

      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ error: 'Email ou senha inválidos' });
      }

      const isCorrectPassword = await bcrypt.compare(password, user.password_hash);

      if (!isCorrectPassword) {
        return res.status(401).json({ error: 'Email ou senha inválidos' });
      }

      const token = jwt.sign(
        { id: user.id, admin: user.admin, name: user.name },
        authConfig.secret,
        { expiresIn: authConfig.expiresIn || '1d' }
      );

      return res.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email,
        admin: user.admin,
        token,
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return res.status(400).json({ errors: error.errors });
      }

      console.error('🔥 Erro no login:', error);

      return res.status(500).json({
        error: 'Erro interno no servidor',
      });
    }
  }
}

export default new SessionController();
