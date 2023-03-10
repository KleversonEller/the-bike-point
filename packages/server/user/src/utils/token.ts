import 'dotenv/config';
import * as jwt from 'jsonwebtoken';

import PersonalError from './personal.error';
import {StatusCodes} from 'http-status-codes';

import type {user} from '@prisma/client';
import type {Request, Response, NextFunction} from 'express';

type jwtPayload = {
	data: user;
	iat: number;
	exp: number;
};

export type TokenPayload = {
	id: string;
	accountId: string;
};

const secret = process.env.JWT_SECRET as string;

declare global {
	namespace Express {
		interface Request {
			user: any;
		}
	}
}

export default class Token {
	static newToken(data: string | TokenPayload): string {
		const config: jwt.SignOptions = {
			algorithm: 'HS256',
			expiresIn: '1d',
		};

		const token = jwt.sign({data}, secret, config);
		return token;
	}

	static decodedToken(req: Request, _res: Response, next: NextFunction): void {
		const token = req.headers.authorization;
		if (!token) {
			throw new PersonalError(StatusCodes.EXPECTATION_FAILED, 'Token is required'); // Erro 417
		}

		try {
			const decoded = jwt.verify(token, secret);

			req.user = (decoded as unknown as jwtPayload).data;
			next();
		} catch (error: unknown) {
			throw new PersonalError(StatusCodes.UNAUTHORIZED, 'Expired or invalid token'); // Erro 401;
		}
	}
}
