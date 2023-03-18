import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.service';

export default class UserController {
    private readonly _service: UserService;

    constructor(service: UserService) {
        this._service = service;
    };

    public async newUser(req: Request, res: Response): Promise<Response> {
        const create = await this._service.newUser(req.body);

        return res.status(StatusCodes.CREATED).json({message: create}); // Code 201
    };

    public async login(req: Request, res: Response): Promise<Response> {
        const token = await this._service.login(req.body);

        return res.status(StatusCodes.OK).json({token}); // Code 200
    }
}
