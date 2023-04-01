import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import GroupService from "../services/group.service";

export default class GroupController {
    private readonly _service: GroupService;

    constructor(service: GroupService) {
        this._service = service;
    }

    public async newGroup(req: Request, res: Response): Promise<Response> {
        const {id} = req.user;

        const create = await this._service.newGroup({...req.body, idUser: id});

        return res.status(StatusCodes.CREATED).json({message: create}); // Code 201
    }

    public async getAllGroups(_req: Request, res: Response): Promise<Response> {
        const groups = await this._service.getAllGroups();

        return res.status(StatusCodes.OK).json({message : groups}) // Code 200
    }
}
