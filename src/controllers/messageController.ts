import { Request, Response } from 'express';

// Définissez vos méthodes de contrôleur avec les types de paramètres explicites
export default {
  async createMessage(req: Request, res: Response) {
    // Implémentation de la création de message
  },

  async getAllMessages(req: Request, res: Response) {
    // Implémentation pour récupérer tous les messages
  },

  async getMessageById(req: Request, res: Response) {
   
  },

  async updateMessage(req: Request, res: Response) {
    
  },

  async deleteMessage(req: Request, res: Response) {
    
  }
};
