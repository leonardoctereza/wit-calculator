"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var validator_1 = require("../middlewares/validator");
var calculator_validator_1 = require("../utils/validators/calculator.validator");
var CalculatorController = /** @class */ (function () {
    function CalculatorController(calculatorService) {
        var _this = this;
        this.calculatorService = calculatorService;
        this.routes = express_1.default.Router();
        this.getOperation = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var id, operation, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        return [4 /*yield*/, this.calculatorService.findOperation(id)];
                    case 1:
                        operation = _a.sent();
                        if (!operation) {
                            return [2 /*return*/, response.status(404).send('Operation not found')];
                        }
                        return [2 /*return*/, response.status(200).json(operation)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, response.status(400).json({
                                message: error_1.message || 'Unexpected error.',
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.addition = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var _a, firstValue, secondValue, result, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, firstValue = _a.firstValue, secondValue = _a.secondValue;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.calculatorService.addition(firstValue, secondValue)];
                    case 2:
                        result = _b.sent();
                        response.setHeader('operationId', result.id);
                        return [2 /*return*/, response.status(200).send(result)];
                    case 3:
                        error_2 = _b.sent();
                        return [2 /*return*/, response.status(400).json({
                                message: error_2.message || 'Unexpected error.',
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.subtraction = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var _a, firstValue, secondValue, result, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, firstValue = _a.firstValue, secondValue = _a.secondValue;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.calculatorService.subtraction(firstValue, secondValue)];
                    case 2:
                        result = _b.sent();
                        response.setHeader('operationId', result.id);
                        return [2 /*return*/, response.status(200).send(result)];
                    case 3:
                        error_3 = _b.sent();
                        return [2 /*return*/, response.status(400).json({
                                message: error_3.message || 'Unexpected error.',
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.multiplication = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var _a, firstValue, secondValue, result, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, firstValue = _a.firstValue, secondValue = _a.secondValue;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.calculatorService.multiplication(firstValue, secondValue)];
                    case 2:
                        result = _b.sent();
                        response.setHeader('operationId', result.id);
                        return [2 /*return*/, response.status(200).send(result)];
                    case 3:
                        error_4 = _b.sent();
                        return [2 /*return*/, response.status(400).json({
                                message: error_4.message || 'Unexpected error.',
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.division = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var _a, firstValue, secondValue, result, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, firstValue = _a.firstValue, secondValue = _a.secondValue;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.calculatorService.division(firstValue, secondValue)];
                    case 2:
                        result = _b.sent();
                        response.setHeader('operationId', result.id);
                        return [2 /*return*/, response.status(200).send(result)];
                    case 3:
                        error_5 = _b.sent();
                        return [2 /*return*/, response.status(400).json({
                                message: error_5.message || 'Unexpected error.',
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.calculatorService = calculatorService;
        this.initializeRoutes();
    }
    CalculatorController.prototype.initializeRoutes = function () {
        this.routes.post('/addition', (0, validator_1.validatorMiddleware)(calculator_validator_1.calculatorValidate), this.addition);
        this.routes.post('/subtraction', (0, validator_1.validatorMiddleware)(calculator_validator_1.calculatorValidate), this.subtraction);
        this.routes.post('/multiplication', (0, validator_1.validatorMiddleware)(calculator_validator_1.calculatorValidate), this.multiplication);
        this.routes.post('/division', (0, validator_1.validatorMiddleware)(calculator_validator_1.calculatorValidate), this.division);
        this.routes.get('/:id', this.getOperation);
    };
    return CalculatorController;
}());
exports.default = CalculatorController;
