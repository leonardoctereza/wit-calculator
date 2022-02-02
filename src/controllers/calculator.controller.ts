import express from 'express';
import { ICalculatorService } from '../services/index';
import { validatorMiddleware } from '../middlewares/validator';
import { calculatorValidate } from '../utils/validators/calculator.validator';
export default class CalculatorController {
  public routes = express.Router();

  constructor(private calculatorService: ICalculatorService) {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.routes.post(
      '/addition',
      validatorMiddleware(calculatorValidate),
      this.addition
    );
    this.routes.post(
      '/subtraction',
      validatorMiddleware(calculatorValidate),
      this.subtraction
    );
    this.routes.post(
      '/multiplication',
      validatorMiddleware(calculatorValidate),
      this.multiplication
    );
    this.routes.post(
      '/division',
      validatorMiddleware(calculatorValidate),
      this.division
    );
    this.routes.get('/:id', this.getOperation);
  }

  private getOperation = async (
    request: express.Request,
    response: express.Response
  ) => {
    try {
      const { id } = request.params;
      const operation = await this.calculatorService.findOperation(id);
      if (!operation) {
        return response.status(404).send('Operation not found');
      }
      return response.status(200).json(operation);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  };

  private addition = async (
    request: express.Request,
    response: express.Response
  ) => {
    const { firstValue, secondValue } = request.body;
    try {
      const result = await this.calculatorService.addition(
        firstValue,
        secondValue
      );

      response.setHeader('operationId', result.id);

      return response.status(200).send(result);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  };

  private subtraction = async (
    request: express.Request,
    response: express.Response
  ) => {
    const { firstValue, secondValue } = request.body;
    try {
      const result = await this.calculatorService.subtraction(
        firstValue,
        secondValue
      );

      response.setHeader('operationId', result.id);
      return response.status(200).send(result);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  };

  private multiplication = async (
    request: express.Request,
    response: express.Response
  ) => {
    const { firstValue, secondValue } = request.body;
    try {
      const result = await this.calculatorService.multiplication(
        firstValue,
        secondValue
      );

      response.setHeader('operationId', result.id);
      return response.status(200).send(result);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  };

  private division = async (
    request: express.Request,
    response: express.Response
  ) => {
    const { firstValue, secondValue } = request.body;
    try {
      const result = await this.calculatorService.division(
        firstValue,
        secondValue
      );

      response.setHeader('operationId', result.id);
      return response.status(200).send(result);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  };
}
