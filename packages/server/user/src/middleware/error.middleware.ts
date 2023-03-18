import type {ErrorRequestHandler} from 'express';
import {StatusCodes} from 'http-status-codes';

const middlewareError: ErrorRequestHandler = (err, _req, res, _next) => {
	const {status, message} = err;
	console.log('LOG DE ERRO -->', message);

	if (!status) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({message: 'Internal server error'});
	}

	return res.status(status).json({message});
};

export default middlewareError;
