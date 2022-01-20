import CalculatorController from './calculator.controller';
import {calculatorService} from '../services';

const calculatorController = new CalculatorController(calculatorService);

export { calculatorController };
