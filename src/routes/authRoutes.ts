import express from 'express';

import { loginUser } from '../controllers/authController';
import { body, validationResult } from 'express-validator';

const router = express.Router();


const loginValidationRules = [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
  ];
  
  function validateLogin(req: express.Request, res: express.Response, next: express.NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }

  // Route de connexion avec validation
router.post('/login', loginValidationRules, validateLogin, loginUser);

  
export default router;
