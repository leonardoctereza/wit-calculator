"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var operations_1 = require("../utils/enums/operations");
var calculatorSchema = new mongoose_1.default.Schema({
    operation: { type: String, enum: operations_1.operations, required: true },
    firstValue: { type: Number, required: true },
    secondValue: { type: Number, required: true },
    result: { type: Number, required: true },
}, { timestamps: true });
var Calculator = mongoose_1.default.model('Calculator', calculatorSchema);
exports.Calculator = Calculator;
