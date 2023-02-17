import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
import { createBlog, getBlogs } from "../controllers/blog.js";

const router = express.Router();

/* CREATE */
router.post("/", createBlog);

/* READ */
router.get("/", getBlogs);
// router.get("/:userId/posts", getUserBlogs);

/* UPDATE */
// router.patch("/:id/like", likePost);

export default router;
