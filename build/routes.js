"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var controllers_1 = require("./controllers");
var router = (0, express_1.Router)();
exports.router = router;
router.use('/api', function (request, response) {
    return response.status(200).send('API OK');
});
router.use('/calculator', controllers_1.calculatorController.routes);
