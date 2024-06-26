"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("./modules/auth");
// import { authenticateToken, handleInputErrors } from './middleware'
var router = (0, express_1.Router)();
router.post('/register', auth_1.register);
router.post('/login', auth_1.login);
// router.post('/posts', authenticateToken, createPost);
// router.get('/posts', getPosts);
// router.put('/posts/:id', authenticateToken, updatePost);
// router.delete('/posts/:id', authenticateToken, deletePost);
// router.post('/posts/:postId/like', authenticateToken, likePost);
// router.post('/posts/:postId/comment', authenticateToken, commentPost);
exports.default = router;
//# sourceMappingURL=router.js.map