// registerController.ts

import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.model';

export const registerUser = async (req: Request, res: Response) => {
  try {
    // Récupérer les données d'inscription depuis le corps de la requête
    const { name, email, password } = req.body;

    // Vérifier si l'utilisateur existe déjà dans la base de données
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Cet utilisateur existe déjà' });
    }

    // Hacher le mot de passe avant de l'enregistrer dans la base de données
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur avec les données fournies
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Enregistrer l'utilisateur dans la base de données
    await newUser.save();

    // Répondre avec un message de succès
    res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
  } catch (error) {
    // Gérer les erreurs
    console.error('Erreur lors de l\'inscription :', error);
    res.status(500).json({ message: 'Une erreur est survenue lors de l\'inscription' });
  }
};
