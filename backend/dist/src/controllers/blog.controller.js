"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPosts = getPosts;
exports.getPostsByCategory = getPostsByCategory;
exports.getPostById = getPostById;
exports.createPost = createPost;
const conn_1 = __importDefault(require("../db/conn"));
const logger_1 = __importDefault(require("../../utilits/logger"));
async function getPosts(_, res) {
    try {
        const blogs_db = await conn_1.default.queryConnect(`SELECT * FROM blog`);
        res.status(200).json(blogs_db.rows);
    }
    catch (e) {
        logger_1.default.error(`Database error:  ${JSON.stringify(e)}`);
        res.status(500).json({ error: `Can not retrive posts` });
    }
}
async function getPostsByCategory(req, res) {
    try {
        const blogs_db = await conn_1.default.queryConnect(`SELECT * FROM blog WHERE category = $1`, [req.body.category]);
        res.status(200).json(blogs_db.rows);
    }
    catch (e) {
        logger_1.default.error(`Database error:  ${JSON.stringify(e)}`);
        res.status(500).json({ error: `Can not retrive posts` });
    }
}
async function getPostById(req, res) {
    try {
        const blogs_db = await conn_1.default.queryConnect(`SELECT * FROM blog WHERE id = $1`, [req.params.id]);
        res.status(200).json(blogs_db.rows);
    }
    catch (e) {
        logger_1.default.error(`Database error:  ${JSON.stringify(e)}`);
        res.status(500).json({ error: `Can not find post...` });
    }
}
async function createPost(req, res) {
    var _a;
    try {
        const filePath = `/uploads/${(_a = req.file) === null || _a === void 0 ? void 0 : _a.filename}`;
        const url = `${req.protocol}://${req.get('host')}${filePath}`;
        const date = (new Date()).toISOString().split('T')[0];
        const data = await conn_1.default.queryConnect(`INSERT INTO blog (title, image,post, category, createdata) VALUES ($1,$2,$3,$4,$5) RETURNING id`, [req.body.title, url, req.body.post, req.body.category, date]);
        res.status(200).json({
            id: data.rows[0].id
        });
    }
    catch (e) {
        console.log(e);
    }
}
