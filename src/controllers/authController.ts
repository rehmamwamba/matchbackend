import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'ray-mwamba'; 

export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    // Vérification des identifiants de l'utilisateur (code à compléter)

    // Simulation d'une authentification réussie pour l'exemple
    const isAuthenticated = true;

    if (isAuthenticated) {
      // Si l'utilisateur est authentifié avec succès, générez un jeton JWT
      const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' }); // Durée de validité du jeton

      // Renvoi du jeton JWT au client
      res.json({ token });
    } else {
      // Si l'authentification échoue
      res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }
  } catch (error) {
    console.error('Erreur lors de l\'authentification de l\'utilisateur :', error);
    res.status(500).json({ message: 'Erreur lors de l\'authentification.' });
  }
}
