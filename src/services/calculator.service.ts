import { ICalculator, Calculator } from '../models/calculator.model';
import { operations } from '../utils/enums/operations';

export interface ICalculatorService {
  addition(firstValue: number, secondValue: number): Promise<ICalculator>;
  subtraction(firstValue: number, secondValue: number): Promise<ICalculator>;
  multiplication(firstValue: number, secondValue: number): Promise<ICalculator>;
  division(firstValue: number, secondValue: number): Promise<ICalculator>;
  findOperation(id: string): Promise<ICalculator | null>;
}

export class CalculatorService implements ICalculatorService {
  public addition(
    firstValue: number,
    secondValue: number
  ): Promise<ICalculator> {
    const result = firstValue + secondValue;
    const calc = Calculator.create({
      firstValue,
      secondValue,
      operation: operations.ADDITION,
      result,
    });
    return calc;
  }

  public async subtraction(
    firstValue: number,
    secondValue: number
  ): Promise<ICalculator> {
    const result = firstValue - secondValue;
    const calc = Calculator.create({
      firstValue,
      secondValue,
      operation: operations.ADDITION,
      result,
    });
    return calc;
  }

  public async multiplication(
    firstValue: number,
    secondValue: number
  ): Promise<ICalculator> {
    const result = firstValue * secondValue;
    const calc = await Calculator.create({
      firstValue,
      secondValue,
      operation: operations.ADDITION,
      result,
    });
    calc.save();
    return calc;
  }

  public async division(
    firstValue: number,
    secondValue: number
  ): Promise<ICalculator> {
    if (secondValue === 0) {
      throw new Error('Division by 0 not allowed');
    }
    const result = firstValue / secondValue;
    const calc = await Calculator.create({
      firstValue,
      secondValue,
      operation: operations.ADDITION,
      result,
    });
    return calc;
  }

  public async findOperation(id: string): Promise<ICalculator | null> {
    const operation = await Calculator.findById({ _id: id });
    return operation || null;
  }
}
