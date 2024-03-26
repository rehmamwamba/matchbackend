import { Request, Response } from 'express';
import User from '../models/user';

const userController = {
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
    // Existing code for the register function
  },

  login: async (req: Request, res: Response) => {
    // Existing code for the login function
  }
};

export default userController;