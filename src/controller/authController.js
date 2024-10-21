import { AuthService } from '../services/authService.js';
import express from 'express';

class AuthController {

    constructor() {
        this.authService = new AuthService();
    }

    async login(request, response) {
        try {
            const { email, password } = request.body;

            const authService = new AuthService();
            const token = await authService.login(email, password);

            response.status(200).json({ message: 'Login feito com sucesso', token });
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
}

export default AuthController;