import express from 'express';
import Razorpay from 'razorpay';
import { getFeedPosts, getUserPosts, likePost } from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';
import { createBlog, getBlogs } from '../controllers/blog.js';
import { createJob, getJobs } from '../controllers/job.js';
import Donation from '../models/Donation.js';

const router = express.Router();

/* CREATE */

/* READ */

router.post('/donate', async (req, res) => {
  var instance = new Razorpay({ key_id: 'rzp_test_71ifT7shoxSTLN', key_secret: 'K2BAAsYlo94TAL0Os1DYXBzB' });

  console.log(req.body.amount, req.body.userId);
  const { amount, userId } = req.body;

  const donation = await Donation.create({ amount, userId });

  const op = await instance.orders.create({
    amount: req.body.amount * 100,
    currency: 'INR',
    receipt: `Thank you for your donation of Rs.${req.body.amount}`
  });
  res.status(201).json({ donation, op });
});

// router.get("/:userId/posts", getUserBlogs);

/* UPDATE */
// router.patch("/:id/like", likePost);

export default router;
