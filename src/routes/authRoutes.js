import express from 'express';
import AuthController from '../controller/authController.js';

const authController = new AuthController();
const authRoutes = express.Router();

authRoutes.post('/login', authController.login);

export default authRoutes;