import { Router } from 'express';

import prisma from '../model/prisma.connect';
import EventModel from '../model/event.model';
import EventService from '../services/event.service';
import EventController from '../controllers/event.controller';
import Token from '../utils/token';

const model = new EventModel(prisma);
const service = new EventService(model);
const controller = new EventController(service);

const eventRouter = Router();

eventRouter.use('/create', (req, res, next) => {
    Token.decodedToken(req, res, next);
}, async (req, res) => controller.newEvent(req, res));

export default eventRouter;
