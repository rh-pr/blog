import express from 'express';

import { getPostById, getPosts, getPostsByCategory } from '../controllers/blog.controller';

const router = express.Router();

router.get('/',  getPosts);
// router.get('/',  getPostById);
router.post('/category', getPostsByCategory);
router.get('/:id', getPostById)

export default router;