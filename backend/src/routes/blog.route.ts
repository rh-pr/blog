import express from 'express';
import multer from 'multer';

import { getPostById, getPosts, getPostsByCategory, createPost } from '../controllers/blog.controller';

const router = express.Router();

const storage = multer.diskStorage({
    destination:(_req, _file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${req.body.category}-${file.originalname}`)
    }
})

const upload = multer( { storage: storage });

router.get('/',  getPosts);
router.post('/category', getPostsByCategory);
router.get('/:id', getPostById)

router.post('/createPost', upload.single('file'), createPost)

export default router;