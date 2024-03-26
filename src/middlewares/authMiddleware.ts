import jwt, { VerifyErrors } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

// Define a custom interface extending Request
interface AuthRequest extends Request {
  user?: any; 
}

const JWT_SECRET = 'ray-mwamba';

export function authenticateToken(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized access. Token missing.' });
  }

  jwt.verify(token, JWT_SECRET, (err: VerifyErrors | null, decoded: object | undefined) => {
    if (err) {
      console.error('JWT verification error:', err);
      return res.status(403).json({ message: 'Unauthorized access. Invalid JWT token.' });
    }

    if (!decoded) {
      return res.status(403).json({ message: 'Unauthorized access. Invalid JWT token.' });
    }

    // Store decoded user data in the req object for later use
    req.user = decoded;
    next();
  });
}