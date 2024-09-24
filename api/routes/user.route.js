import express from 'express';
import { test, signin } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);
router.get('/signin', signin);

export default router;