import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth.js';

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).json({ error: 'Token error' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: 'Token malformatted' });
  }

  try {
    const decoded = jwt.verify(token, authConfig.secret);
    req.userId = decoded.id; // adiciona info do usuário para o controller
    req.userName = decoded.name; // adiciona info do usuário no token
    req.userIsAdmin = decoded.admin; // Verificar se o usuário é admin
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};

export default authMiddleware;
