"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    PORT: process.env.PORT || 8000,
    DATABASE: {
        DB_USER: process.env.DB_USER || 'postgres',
        DB_HOST: process.env.DB_HOST || 'localhost',
        DB_NAME: process.env.DB_NAME || 'blog',
        DB_PASSWORD: process.env.DB_PASSWORD || 'root',
        DB_PORT: Number(process.env.DB_PORT) || 5432,
    }
};
exports.default = config;
