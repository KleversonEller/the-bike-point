import { PrismaClient, event, Prisma } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';

import PersonalError from '../utils/personal.error';

export default class EventModel {
    private readonly _db: PrismaClient;

    constructor(connect: PrismaClient) {
        this._db = connect;
    }

    public async newEvent(data: event): Promise<string> {
        try {
            await this._db.event.create({data});

            return 'Evento criado com sucesso !';
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {
                const tag = error.meta?.tag

                throw new PersonalError(StatusCodes.UNAUTHORIZED, `Já existe um evento com o nome ${tag}`) // Error 401
            }
            throw error // Error 500
        }
    }
}
