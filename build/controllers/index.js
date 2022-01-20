"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatorController = void 0;
var calculator_controller_1 = __importDefault(require("./calculator.controller"));
var services_1 = require("../services");
var calculatorController = new calculator_controller_1.default(services_1.calculatorService);
exports.calculatorController = calculatorController;
