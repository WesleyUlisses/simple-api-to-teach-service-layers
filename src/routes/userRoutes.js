import express from 'express';
import UserController from '../controller/userController.js';

const userController = new UserController();
const userRoutes = express.Router();

userRoutes.post('/usuarios', userController.create);

export default userRoutes;