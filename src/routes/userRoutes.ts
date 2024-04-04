import { Request, Response } from 'express';
import User from '../models/user';

const UserController = {
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error('Error getting all users:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  register: async (req: Request, res: Response) => {
    try {
      // Créer un nouvel utilisateur avec les données du corps de la requête
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Autres méthodes du contrôleur...
};




export default UserController;