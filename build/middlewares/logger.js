"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var morgan_1 = __importDefault(require("morgan"));
var dayjs_1 = __importDefault(require("dayjs"));
var fs_1 = __importDefault(require("fs"));
var env_1 = __importDefault(require("../configs/env"));
var stream = {
    write: function (message) {
        if (env_1.default.logger) {
            var date = (0, dayjs_1.default)().format('YYYY-MM-D');
            var fileName = "logs/".concat(date, ".csv");
            fs_1.default.appendFile("".concat(fileName), message, function (err) {
                if (err)
                    console.log('Error writing log on file');
            });
            console.log(message);
        }
    },
};
var logger = (0, morgan_1.default)(function (tokens, req, res) {
    var ip = tokens['remote-addr'](req, res);
    var method = tokens.method(req, res);
    var url = tokens.url(req, res);
    var status = tokens.status(req, res);
    var responseTime = tokens['response-time'](req, res) + 'ms';
    var operationId = tokens.operationId(req, res);
    return "".concat(ip, ";").concat(method, ";").concat(url, ";").concat(status, ";").concat(responseTime, ";").concat(operationId, ";");
}, { stream: stream });
exports.logger = logger;
morgan_1.default.token('operationId', function (req, res) {
    var _a;
    return ((_a = res.getHeader('operationId')) === null || _a === void 0 ? void 0 : _a.toString()) || undefined;
});
