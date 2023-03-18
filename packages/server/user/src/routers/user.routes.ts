import {Router} from "express";

import prisma from '../models/prisma.connect';
import UserModel from '../models/user.model';
import UserService from '../services/user.service';
import UserController from '../controllers/user.controller';

const model = new UserModel(prisma);
const service = new UserService(model);
const controller = new UserController(service);

const userRouter = Router();

userRouter.post("/create", async (req, res) => controller.newUser(req, res));

export default userRouter;
