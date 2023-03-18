import { group } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import GroupService from "../services/group.service";

export default class GroupController {
    private readonly _service: GroupService;

    constructor(service: GroupService) {
        this._service = service;
    }

    public async newGroup(req: Request, res: Response): Promise<Response> {
        const create = await this._service.newGroup(req.body);

        return res.status(StatusCodes.CREATED).json({message: create}); // Code 201
    }
}
