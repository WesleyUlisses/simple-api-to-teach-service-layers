import UserDao from '../daos/userDao.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export class AuthService {

    constructor() {
        this.userDao = new UserDao();
    }

    async login(email, password) {

        if (!email || !password) {
            throw new Error('Todos os campos são obrigatórios');
        }

        try {

            const user = await this.userDao.getUserByEmail(email);

            if (!user) {
                throw new Error('Email não cadastrado');
            }
               
            if (user.password !== password) {
                throw new Error('Senha incorreta');
            }

            const token = await this.generateToken(user.email);
            if (!token) {
                throw new Error('Erro ao gerar token');
            }

            return token;

        } catch (error) {
            throw new Error(error.message);
        }
    }

    async generateToken(userEmail) {
        return jwt.sign({ email: userEmail }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    };
}