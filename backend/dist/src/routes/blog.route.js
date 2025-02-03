"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const blog_controller_1 = require("../controllers/blog.controller");
const router = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${req.body.category}-${file.originalname}`);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
router.get('/', blog_controller_1.getPosts);
router.post('/category', blog_controller_1.getPostsByCategory);
router.get('/:id', blog_controller_1.getPostById);
router.post('/createPost', upload.single('file'), blog_controller_1.createPost);
exports.default = router;
