// messageRoutes.ts

import express from 'express';
import MessageController from '../controllers/messageController'; 

const router = express.Router();

// Définissez vos routes pour les messages ici
router.post('/', MessageController.createMessage);
router.get('/', MessageController.getAllMessages);
router.get('/:id', MessageController.getMessageById);
router.put('/:id', MessageController.updateMessage);
router.delete('/:id', MessageController.deleteMessage);

export default router;
