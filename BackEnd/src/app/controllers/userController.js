import bcrypt from 'bcryptjs';
import { v4 } from 'uuid';
import * as Yup from 'yup';
import User from '../models/User.js';

/**
 * UserController
 * --------------
 * Responsável pelo cadastro de usuários no sistema.
 *
 * Funcionalidade:
 * - Criar novos usuários com dados validados
 *
 * Regras de negócio:
 * - Email deve ser único
 * - Senha deve possuir no mínimo 6 caracteres
 * - A senha nunca é armazenada em texto puro
 *
 * Fluxo do método store (cadastro):
 * 1. Define um schema de validação com Yup
 *    - name, email e password são obrigatórios
 *    - password possui limite mínimo e máximo de caracteres
 * 2. Valida a existência do body da requisição
 * 3. Executa a validação dos dados enviados
 *    - Retorna erros detalhados se a validação falhar
 * 4. Verifica se já existe um usuário cadastrado com o mesmo email
 *    - Evita duplicidade de usuários
 * 5. Gera o hash da senha utilizando bcrypt
 * 6. Cria o usuário no banco de dados
 *    - ID gerado via UUID
 * 7. Retorna os dados públicos do usuário
 *    - Nunca retorna a senha ou o hash
 *
 * Segurança:
 * - Senhas criptografadas com bcrypt
 * - Email único por usuário
 *
 * Observações:
 * - Utiliza Sequelize como ORM
 * - Utiliza Yup para validação dos dados
 * - Geração de UUID para identificação dos usuários
 */

class UserController {
  async store(req, res) {
    try {
      const schema = Yup.object({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(6).max(50).required(),
        admin: Yup.boolean().default(false),
      });

      if (!req.body) {
        return res.status(400).json({ error: 'Body is missing' });
      }

      await schema.validate(req.body, { abortEarly: false });

      const { name, email, password, admin } = req.body;

      const existingUser = await User.findOne({ where: { email } });

      if (existingUser) {
        return res.status(409).json({ error: 'User already exists' });
      }

      const password_hash = await bcrypt.hash(password, 10);

      const user = await User.create({
        id: v4(),
        name,
        email,
        password_hash,
        admin,
      });

      return res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        admin: user.admin,
      });
    } catch (err) {
      console.error(err);

      return res.status(400).json({
        error: 'Validation or server error',
        details: err.errors || err.message,
      });
    }
  }
}

export default new UserController();
