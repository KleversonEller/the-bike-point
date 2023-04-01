import { Request, Response } from 'express';

import EventService from '../services/event.service';
import { StatusCodes } from 'http-status-codes';

export default class EventController {
    private readonly _service: EventService;

    constructor(service: EventService) {
        this._service = service;
    }

    public async newEvent(req: Request, res: Response): Promise<Response> {
        const {id} = req.user

        const create = await this._service.newEvent({...req.body, idUser: id});

        return res.status(StatusCodes.CREATED).json({message: create}); // Code 201
    }
}
