import { Router } from 'express'
import { createPost, getPosts, updatePost, deletePost, getPostById } from './handlers/post'
import { likePost, commentPost } from './handlers/other'
import { protect } from './modules/auth'

const router = Router()

router.get('/posts/:id', getPostById)
router.get('/posts', getPosts)
router.post('/posts', protect, createPost)
router.put('/posts/:id', protect, updatePost)
router.delete('/posts/:id', protect, deletePost)

router.post('/posts/:postId/like', protect, likePost)
router.post('/posts/:postId/comment', protect, commentPost)

export default router
