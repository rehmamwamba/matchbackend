import express, { Request, Response } from 'express';
import  getAllUsers  from '../controllers/userController'; 
import { authenticateToken } from '../middlewares/authMiddleware';

const router = express.Router(); 


router.get('/', authenticateToken, async (req: Request, res: Response) => {
  try {
    const getAllUsers: {
        getAllUsers: (req: Request, res: Response) => Promise<void>;
        register: (req: Request, res: Response) => Promise<void>;
        login: (req: Request, res: Response) => Promise<void>;
    } 
    }
    }) 
     


export default router; 