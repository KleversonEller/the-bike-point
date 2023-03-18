import { Prisma, PrismaClient, group } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import PersonalError from "../utils/personal.error";

export default class GroupModel{
    private readonly _db: PrismaClient;

    constructor(connect: PrismaClient) {
        this._db = connect;
    }

    public async newGroup(data: group): Promise<void | string> {
        try {
            await this._db.group.create({data});

            return "Grupo de bike criado com sucesso!"
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {
                const tag = error.meta?.target

                throw new PersonalError(StatusCodes.UNAUTHORIZED, `Esse ${tag} já está em uso!`) //Error 401
            }
            throw error // Error 500
        }
    }
}
