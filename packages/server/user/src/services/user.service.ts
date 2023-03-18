import { user } from '@prisma/client';

import ValidUser from '../middleware/valid.user.middleware';
import UserModel from '../models/user.model';
import Hash from '../utils/hash';

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
    }
}
