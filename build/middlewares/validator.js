"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorMiddleware = void 0;
var validatorMiddleware = function (schema) {
    return function (request, response, next) {
        var error = schema.validate(request.body).error;
        if (error) {
            return response.status(422).json({ error: error.message });
        }
        next();
    };
};
exports.validatorMiddleware = validatorMiddleware;
