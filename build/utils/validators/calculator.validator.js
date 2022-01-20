"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatorValidate = void 0;
var joi_1 = __importDefault(require("joi"));
var calculatorValidate = joi_1.default.object({
    firstValue: joi_1.default.number().required(),
    secondValue: joi_1.default.number().required(),
});
exports.calculatorValidate = calculatorValidate;
