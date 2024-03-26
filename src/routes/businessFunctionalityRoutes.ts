// businessFunctionalityRoutes.ts

import express from 'express';
import { someBusinessFunctionality } from '../controllers/businessFunctionalityController';

const router = express.Router();

router.post('/some-functionality', someBusinessFunctionality);

export default router;
