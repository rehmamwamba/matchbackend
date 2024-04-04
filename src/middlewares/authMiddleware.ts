import jwt, { VerifyErrors } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

// Définition d'une interface personnalisée étendant Request
interface AuthRequest extends Request {
  user?: any; 
}

const JWT_SECRET = 'ray-mwamba';

export async function authenticateToken(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Accès non autorisé. Token manquant.' });
  }

  try {
    const decoded = await jwt.verify(token, JWT_SECRET);

    // Stocker les données utilisateur décodées dans l'objet req pour une utilisation ultérieure
    req.user = decoded;
    next();
  } catch (err) {
    console.error('Erreur de vérification du JWT :', err);
    return res.status(403).json({ message: 'Accès non autorisé. Token JWT invalide.' });
  }
}
