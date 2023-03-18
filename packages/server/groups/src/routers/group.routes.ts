import { Router } from "express";

import prisma from "../model/prisma.connect";
import GroupModel from "../model/group.model";
import GroupService from "../services/group.service";
import GroupController from "../controller/group.controller";

const model = new GroupModel(prisma);
const service = new GroupService(model);
const controller = new GroupController(service);

const groupRouter = Router();

groupRouter.post("/create", async (req, res) => controller.newGroup(req, res));

export default groupRouter;
