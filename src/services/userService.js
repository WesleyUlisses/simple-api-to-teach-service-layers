import UserDao from '../daos/userDao.js';

export class UserService {

    constructor() {
        this.userDao = new UserDao();
    }

    async save(user) {

        if (!user.name || !user.email || !user.password) {
            throw new Error('Todos os campos são obrigatórios');
        }

        if (this.isNameValid(user.name) === false) {
            throw new Error('Nome inválido');
        }

        try {

            const userExists = await this.userDao.getUserByEmail(user.email);

            if (userExists) {
                throw new Error('Email já cadastrado');
            }

            return this.userDao.save(user);

        } catch (error) {
            throw new Error(error.message);
        }

    }

    isNameValid(name) {

        const nameSize = name.length;

        if (nameSize < 3) {
            return false;
        }

        return true;
    }

}