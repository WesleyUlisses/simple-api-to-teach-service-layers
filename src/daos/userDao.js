import { PrismaClient } from '@prisma/client';

class UserDao {

    constructor() {
        this.prisma = new PrismaClient();
    }

    save(user) {
        return this.prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            },
        });
    }

    getUserByEmail(email) {
        return this.prisma.user.findUnique({ where: { email } });
    }

    getAllUsers() {
        return this.prisma.user.findMany({
            select: { id: true, name: true, email: true, password: true },
        });
    }

    updateUser(user) {
        return this.prisma.user.update({
            where: { id: user.id },
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            },
        });
    }

    deleteUser(id) {
        return this.prisma.user.delete({ where: { id } });
    }
}

export default UserDao;