"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const blog_route_1 = __importDefault(require("./routes/blog.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// const storage = multer.diskStorage({
//   destination: function (_req: Request, _file: Express.Multer.File, cb) {
//     cb(null, 'uploads')
//   },
//   filename: function (_req:Request, file: Express.Multer.File, cb) {
//     cb(null, `${Date.now() }.${file.originalname}` )
//   }
// })
// const upload = multer({ storage: storage })
app.use((0, express_1.json)());
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST"]
}));
app.use(`/posts`, blog_route_1.default);
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads')));
// app.post('/blogimage', upload.single('file'), function (req:Request, res:Response, next) {
//   try {
//     res.send(req.file)
//   } catch(e) {
//     console.log(e)
//   }
// })
app.listen(port, async () => {
    console.log(` Server is running at http://localhost:${port}`);
});
