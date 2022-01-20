"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var env_1 = __importDefault(require("./configs/env"));
var logger_1 = require("./middlewares/logger");
var routes_1 = require("./routes");
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1.default)();
        this.appSettings();
        this.connectDb();
        this.initializeMiddleWares();
        this.addRoutes();
    }
    App.prototype.listen = function () {
        this.app.listen(env_1.default.serverPort, function () {
            console.log("Server running on port ".concat(env_1.default.serverPort));
        });
    };
    App.prototype.appSettings = function () {
        this.app.set('trust proxy', true);
    };
    App.prototype.initializeMiddleWares = function () {
        this.app.use(express_1.default.json());
        this.app.use(logger_1.logger);
    };
    App.prototype.addRoutes = function () {
        this.app.use(routes_1.router);
    };
    App.prototype.connectDb = function () {
        if (env_1.default.mongoDb.mongoDebug) {
            mongoose_1.default.set('debug', true);
        }
        mongoose_1.default.connect(env_1.default.mongoDb.url);
    };
    return App;
}());
exports.App = App;
