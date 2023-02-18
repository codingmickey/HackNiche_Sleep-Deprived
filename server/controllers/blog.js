import Post from '../models/Post.js';
import User from '../models/User.js';
import Blog from '../models/Blog.js';

/* CREATE */
export const createBlog = async (req, res) => {
  try {
    const { title, description, body, tags } = req.body;

    const blog = await Blog.create({ title, description, body, tags });

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
export const getBlogs = async (req, res) => {
  try {
    const blog = await Blog.find();
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
