import express from 'express';
import  { UserService } from '../services/userService.js';

class UserController {

    constructor() {
        this.userService = new UserService();
    }

    async create(request, response) {
        try {
            
            const user = {
                name: request.body.name,
                email: request.body.email,
                password: request.body.password
            };

            const userService = new UserService();
            await userService.save(user);

            response.status(201).json({ message: 'Usuário criado com sucesso' });
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
}

export default UserController;