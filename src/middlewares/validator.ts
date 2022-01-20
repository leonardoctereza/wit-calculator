import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const validatorMiddleware = (schema: Joi.Schema) => {
  return (request: Request, response: Response, next: NextFunction) => {
    const { error } = schema.validate(request.body);
    if (error) {
      return response.status(422).json({ error: error.message });
    }
    next();
  };
};

export { validatorMiddleware };
