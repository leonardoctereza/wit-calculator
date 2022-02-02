import mongoose from 'mongoose';
import { operations } from '../utils/enums/operations';

export interface ICalculator extends mongoose.Document {
  operation: operations;
  firstValue: number;
  secondValue: number;
  result: number;
  createdAt: Date;
  updatedAt: Date;
}

const calculatorSchema = new mongoose.Schema(
  {
    operation: { type: String, enum: operations, required: true },
    firstValue: { type: Number, required: true },
    secondValue: { type: Number, required: true },
    result: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Calculator = mongoose.model<ICalculator>(
  'Calculator',
  calculatorSchema
);
