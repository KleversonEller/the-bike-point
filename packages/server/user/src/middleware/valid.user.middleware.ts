import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';

import PersonalError from '../utils/personal.error';

import INewUser from '../interfaces/user.interface';

export default class ValidUser {
    static validNewUser(data: INewUser): void {
        const {error} = Joi.object({
            email: Joi.string().required().email().messages({
                'string.email': 'Esse não é um e-mail valido',
                'any.required': 'O e-mail é um campo obrigatório',
            }),
            pass: Joi.string().min(6).max(20).messages({
                'any.required': 'A senha é um campo obrigatório',
                'string.min': 'A senha deve ter no mínimo 6 caracteres',
                'string.max': 'A senha deve ter no máximo 20 caracteres',
            }),
            name: Joi.string().required().max(20).messages({
                'string.max': 'O nome deve ter no máximo 20 caracteres',
                'any.required': 'O nome é um campo obrigatório',
            })
        }).validate(data);

        if(error) throw new PersonalError(StatusCodes.METHOD_NOT_ALLOWED, error.message); // Error 405
    }
}
