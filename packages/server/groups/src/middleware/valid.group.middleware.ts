import Joi from "joi";
import { StatusCodes } from "http-status-codes";

import PersonalError from "../utils/personal.error";

import INewGroup from "../interface/group.interface";

export default class ValidGroup {
    static validNewGroup(data: INewGroup): void {
        const {error} =Joi.object({
            idUser: Joi.string(),
            groupName: Joi.string().min(2).max(20).required().messages({
                'string.min': 'O nome do grupo deve ter no minimo 2 caracteres',
                'string.max': 'O nome do grupo deve ter no maximo 20 caracteres',
                'any.required':  'O nome do grupo é obrigatorio',
            }),
            phone: [Joi.optional(), Joi.allow(null)],
            whatsapp: [Joi.string().optional(), Joi.allow(null)],
            website: [Joi.string().optional(), Joi.allow(null)],
            discord: [Joi.string().optional(), Joi.allow(null)],
            city: Joi.string().required().messages({
                'any.required': 'A cidade é obrigatória'
            }),
            state: Joi.string().required().messages({
                'any.required': 'O estado é obrigatória'
            }),
            country: Joi.string().required().messages({
                'any.required': 'O pais é obrigatória'
            }),
        }).validate(data);

        if(error) throw new PersonalError(StatusCodes.METHOD_NOT_ALLOWED, error.message) // Error 405
    }
}
