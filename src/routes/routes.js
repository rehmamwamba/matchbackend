import express, { Request, Response } from 'express';
import UserController from './userController';
import ProfileController from './profileController';
import PreferenceController from './preferenceController';
import MessageController from './messageController';
import LikeController from './likeController';
import SubscriptionController from './subscriptionController';
import BlockController from './blockController';

const router = express.Router();

// Endpoints pour les utilisateurs
router.get('/users', UserController.getAllUsers);
router.get('/users/:userId', UserController.getUserById);
router.post('/users', UserController.createUser);
router.put('/users/:userId', UserController.updateUser);
router.delete('/users/:userId', UserController.deleteUser);

// Endpoints pour les profils
router.get('/profiles', ProfileController.getAllProfiles);
router.get('/profiles/:profileId', ProfileController.getProfileById);
router.post('/profiles', ProfileController.createProfile);
router.put('/profiles/:profileId', ProfileController.updateProfile);
router.delete('/profiles/:profileId', ProfileController.deleteProfile);

// Endpoints pour les préférences
router.get('/preferences/:userId', PreferenceController.getPreferencesByUserId);
router.put('/preferences/:userId', PreferenceController.updatePreferences);

// Endpoints pour les messages
router.get('/messages', MessageController.getAllMessages);
router.get('/messages/:messageId', MessageController.getMessageById);
router.post('/messages', MessageController.createMessage);
router.put('/messages/:messageId', MessageController.updateMessage);
router.delete('/messages/:messageId', MessageController.deleteMessage);

// Endpoints pour les likes
router.post('/likes', LikeController.likeUser);
router.delete('/likes/:likeId', LikeController.unlikeUser);

// Endpoints pour les abonnements
router.post('/subscriptions', SubscriptionController.subscribeUser);
router.delete('/subscriptions/:subscriptionId', SubscriptionController.unsubscribeUser);

// Endpoints pour les blocages
router.post('/blocks', BlockController.blockUser);
router.delete('/blocks/:blockId', BlockController.unblockUser);

export default router;
