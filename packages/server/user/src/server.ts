import express from 'express';
import cors from 'cors';
import 'express-async-errors'

import middlewareError from './middleware/error.middleware';
import userRouter from './routers/user.routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);

app.use(middlewareError);

app.listen(3013, () => console.log("Utilizando a porta 3013 !"));
