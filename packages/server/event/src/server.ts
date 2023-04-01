import express from 'express';
import cors from 'cors';
import 'express-async-errors'

import middlewareError from './middleware/error.middleware';
import eventRouter from './routers/event.routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/event', eventRouter);

app.use(middlewareError);

app.listen(3023, () => console.log("Utilizando a porta 3023!"));
