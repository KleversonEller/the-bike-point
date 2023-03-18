import { Prisma, PrismaClient, user } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';

import PersonalError from '../utils/personal.error';

import ILogin from '../interfaces/user.interface';

export default class UserModel {
    private readonly _db: PrismaClient;

    constructor(connect: PrismaClient) {
        this._db = connect;
    }

    public async newUser(data: user): Promise< string> {
        try {
            await this._db.user.create({data});
            return "Usuário criado com sucesso !"
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {
                const tag = error.meta?.target
                throw new PersonalError(StatusCodes.UNAUTHORIZED, `Esse ${tag} ja esta em uso !`) // Error 401
            }
            throw error // Erro 500
        }   
    };

    public async login(data: ILogin): Promise<user> {
        const {email} = data
        const userInfos = await this._db.user.findUnique({where: { email }})

        if(userInfos) return userInfos
        else throw new PersonalError(StatusCodes.NOT_FOUND, 'Usuário não encontrado'); // Erro 404
    }
}
