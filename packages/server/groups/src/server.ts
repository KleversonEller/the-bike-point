import express from 'express';
import cors from 'cors';
import 'express-async-errors'

import middlewareError from './middleware/error.middleware';
import groupRouter from './routers/group.routes'

const app = express();

app.use(express.json());
app.use(cors());

app.use(groupRouter);

app.use(middlewareError);

app.listen(3015, () => console.log("Utilizando a porta 3015!"));
