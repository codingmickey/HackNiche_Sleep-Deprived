import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String
    },
    description: {
      type: String,
    },
    body: {
      type: String,
    },
    tags: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Blog", blogSchema);

export default Post;
