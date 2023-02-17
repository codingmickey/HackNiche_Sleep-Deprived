import Post from '../models/Post.js';
import User from '../models/User.js';
import Job from '../models/Job.js';

/* CREATE */
export const createJob = async (req, res) => {
  try {
    const { org, job } = req.body;

    const blog = await Job.create({
      org,
      job
    });

    // // Associate user to post
    // await User.findByIdAndUpdate(
    //   userId,
    //   {
    //     $addToSet: { blogs: blog._id },
    //   },
    //   { new: true }
    // );

    res.status(201).send({ data: blog });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getJobs = async (req, res) => {
  try {
    const blog = await Jobs.find();
    res.status(200).json(blog);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// export const getUserBlogs = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const blog = await Blog.find({ author: userId });
//     res.status(200).json(blog);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

// /* UPDATE */
// export const likePost = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { userId } = req.body;
//     const blog = await Blog.findById(id);
//     const isLiked = blog.likes.get(userId);

//     if (isLiked) {
//       blog.likes.delete(userId);
//     } else {
//       blog.likes.set(userId, true);
//     }

//     const blog = await blog.findByIdAndUpdate(
//       id,
//       { likes: blog.likes },
//       { new: true }
//     );

//     res.status(200).json(blog);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };
