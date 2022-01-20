"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    serverPort: process.env.PORT || 3000,
    mongoDb: {
        url: "mongodb://".concat(process.env.MONGO_USER, ":").concat(process.env.MONGO_PASS, "@").concat(process.env.MONGO_PATH),
        mongoDebug: false,
    },
    logger: true,
};
