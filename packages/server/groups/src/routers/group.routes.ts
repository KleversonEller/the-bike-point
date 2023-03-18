import {Router} from "express";


import prisma from "../model/prisma.connect";
// import GroupModel from '../models/group.model';
// import GroupService from '../services/group.service';
// import GroupController from '../controllers/group.controller';

// const model = new groupModel(prisma);
// const service = new groupService(model);
// const controller = new groupController(service);

const groupRouter = Router();

// groupRouter.post("/create", async (req, res) => controller.newgroup(req, res));

export default groupRouter;
