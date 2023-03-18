import { user } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';

import ILogin from '../interfaces/user.interface';

import ValidUser from '../middleware/valid.user.middleware';
import UserModel from '../models/user.model';
import Hash from '../utils/hash';
import PersonalError from '../utils/personal.error';
import Token from '../utils/token';

export default class UserService {
    private readonly _model: UserModel;

    constructor(model: UserModel) {
        this._model = model;
    };

    public async newUser(data: user): Promise<string> {
        ValidUser.validNewUser(data);
        const hashPass =  await Hash.newHash(data.pass);

        const create = await this._model.newUser({... data, pass: hashPass});
        return create
    };

    public async login(data: ILogin): Promise<string> {
        ValidUser.validLogin(data);

        const userInfos = await this._model.login(data);

        const validPass = await Hash.validateHash(data.pass, userInfos.pass);
        if(!validPass) throw new PersonalError(StatusCodes.NOT_ACCEPTABLE, 'Senha invalida'); // Erro 406

        return Token.newToken({id: userInfos.id, name: userInfos.name, email: userInfos.email})
    }
}
