import express from 'express';
import { getFeedPosts, getUserPosts, likePost } from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';
import { createBlog, getBlogs } from '../controllers/blog.js';
import { createJob, getJobs } from '../controllers/job.js';

const router = express.Router();

/* CREATE */
router.post('/', createJob);

/* READ */
router.get('/', getJobs);
// router.get("/:userId/posts", getUserBlogs);

/* UPDATE */
// router.patch("/:id/like", likePost);

export default router;
