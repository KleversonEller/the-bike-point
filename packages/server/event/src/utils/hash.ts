import bcrypt from 'bcrypt';
import {StatusCodes} from 'http-status-codes';

import PersonalError from './personal.error';

export default class Hash {
	static async newHash(data: string): Promise<string> {
		try {
			const hashPassword = await bcrypt.hash(data, 10);
			return hashPassword;
		} catch (error: unknown) {
			throw new PersonalError(StatusCodes.FAILED_DEPENDENCY, 'Failed in hash password'); // Error 424;
		}
	}

	static async validateHash(password: string, hash: string): Promise<boolean> {
		return bcrypt.compare(password, hash);
	}
}
