import { user } from '@prisma/client';
import UserModel from '../models/user.model';

export default class UserService {
    private readonly _model: UserModel;

    constructor(model: UserModel) {
        this._model = model;
    };

    public async newUser(data: user): Promise<string> {
        const create = await this._model.newUser(data)
        return create as string
    }
}
