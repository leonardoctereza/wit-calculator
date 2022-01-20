import { ICalculator } from '../../models/calculator.model';

export interface ICalculatorService {
  addition(firstValue: number, secondValue: number): Promise<ICalculator>;
  subtraction(firstValue: number, secondValue: number): Promise<ICalculator>;
  multiplication(firstValue: number, secondValue: number): Promise<ICalculator>;
  division(firstValue: number, secondValue: number): Promise<ICalculator>;
  findOperation(id: string): Promise<ICalculator | null>;
}
