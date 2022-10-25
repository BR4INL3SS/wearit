import { hash } from 'argon2'
import { verify } from 'argon2';
import prisma from "../utils/db";
import { CreateUserInput } from "../schema/user.schema";

export function findUserByEmail(email: string) {
    return prisma.user.findUnique({
        where: { email }
    })
}

export function findUserById(id: number) {
    return prisma.user.findUnique({
        where: { id }
    })
}

export function validatePassword(hash: string, candidatePassword: string) {
    return verify(hash, candidatePassword);
}

export async function createUser(user: Omit<CreateUserInput, 'passwordConfirmation'>) {
    user.password = await hash(user.password);
    return await prisma.user.create({
        data: user
    });
}