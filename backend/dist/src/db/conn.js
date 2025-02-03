"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const default_1 = __importDefault(require("../config/default"));
const logger_1 = __importDefault(require("../../utilits/logger"));
exports.pool = new pg_1.Pool({
    user: default_1.default.DATABASE.DB_USER,
    password: default_1.default.DATABASE.DB_PASSWORD,
    host: default_1.default.DATABASE.DB_HOST,
    port: default_1.default.DATABASE.DB_PORT,
    database: default_1.default.DATABASE.DB_NAME
});
const queryConnect = async (text, params) => {
    try {
        const res = await exports.pool.query(text, params);
        return res;
    }
    catch (e) {
        logger_1.default.error('Query error: ', e);
        throw e;
    }
};
const closePool = async () => {
    await exports.pool.end();
};
exports.default = {
    queryConnect,
    closePool,
};
