import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';

import PersonalError from '../utils/personal.error';

import INewEvent from '../interfaces/event.interface';

export default class ValidEvent {
    static validNewEvent(data: INewEvent): void {
        const {error} = Joi.object({
            idUser: Joi.string().required(),
            contact: Joi.string().required().messages({
                'any.required': 'O campo contato é obrigatório'
            }),
            eventName: Joi.string().min(2).max(20).required().messages({
                'string.min': 'O nome do evento deve ter no minimo 2 caracteres',
                'string.max': 'O nome do evento deve ter no maximo 20 caracteres',
                'any.required':  'O nome do evento é obrigatório',
            }),
            eventLocation: Joi.string().required().messages({
                'any.required': 'A localização do evento é um campo obrigatório'
            }),
            eventDate: Joi.date().required().messages({
                'any.required': 'A data do evento é um campo obrigatório',
                'any.date': 'Essa não é uma data valida'
            }),
            eventCost: Joi.number().required().messages({
                'any.required': 'O custo do evento é obrigatório, se for gratuito utilize o valor zero',
                'any.number': 'Esse não é um valor valido'
            }),
            moreInfos: Joi.string().required().min(4).max(800).messages({
                'any.required': 'Voce deve colocar uma descrição do evento',
                'string.min': 'As informações do evento deve ter no minimo 2 caracteres',
                'string.max': 'As informações do evento deve ter no maximo 800 caracteres',
            })
        }).validate(data)

        if(error) throw new PersonalError(StatusCodes.METHOD_NOT_ALLOWED, error.message) // Error 405
    }
}
