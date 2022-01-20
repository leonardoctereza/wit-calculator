import Joi from 'joi';

const calculatorValidate = Joi.object({
  firstValue: Joi.number().required(),
  secondValue: Joi.number().required(),
});
export { calculatorValidate };
