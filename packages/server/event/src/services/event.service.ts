import { event } from '@prisma/client';

import EventModel from '../model/event.model';
import ValidEvent from '../middleware/valid.event.middleware';

export default class EventService {
    private readonly _model: EventModel;

    constructor(model: EventModel) {
        this._model = model;
    }

    public async newEvent(data: event): Promise<string> {
        ValidEvent.validNewEvent(data);

        const create = await this._model.newEvent(data);

        return create;
    }
}
