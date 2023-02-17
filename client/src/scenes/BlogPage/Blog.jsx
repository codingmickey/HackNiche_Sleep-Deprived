import React, { useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from 'react-markdown';
import Navbar1 from '../navbar/Navbar1';
import axios from 'axios';

export const Blog = () => {
  const [value, setValue] = React.useState('**Hello world!!!**');
  const [title, setTitle] = React.useState('');
  const [des, setDes] = React.useState('');
  const [blog, setBlog] = React.useState([]);

  useEffect(() => {
    const f = async () => {
      const response = await axios.get('http://localhost:3001/blogs');
      if (response.status == 200) {
        console.log(response);
        setBlog(() => [...response.data]);
        console.log(blog);
      }
    };
    f();
  }, []);

  const handlePost = async () => {
    let response = await axios.post('http://localhost:3001/blogs', {
      title: title,
      body: value
    });
    console.log(response);
    if (response.status === 200) {
      alert('Blog post successfully');
    }
  };

  return (
    <>
      {/* {blog != [] && <ReactMarkdown>{blog[6].body}</ReactMarkdown>} */}
      <Navbar1 />
      <div className="w-[75%] mx-auto">
        <div className="h-">{blog != [] && <ReactMarkdown>{blog[6].body}</ReactMarkdown>}</div>
        <div className="container mt-20">
          <div className="text-lg mb-5">Post your personalised blogs here</div>
          <div className="text-lg">Title:</div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="placeholder:text-[1.0rem] bg-grey border-[0.08rem] border-gray-300 outline-none py-[0.5rem] px-4 mt-2 w-full mb-4"
            placeholder="Enter title here"
          />
          <div className="text-lg">Description:</div>
          <input
            type="text"
            name="des"
            value={des}
            onChange={(e) => setDes(e.target.value)}
            className="placeholder:text-[1.0rem] bg-grey border-[0.08rem] border-gray-300 outline-none py-[0.5rem] px-4 mt-2 w-full mb-4"
            placeholder="Enter description here"
          />
          <MDEditor value={value} onChange={setValue} />
          <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
        <div className="mt-8 mb-4 flex justify-center">
          <div className="">
            <button
              className="px-5 py-1 bg-blue-500 text-white hover:bg-blue-400 text-lg rounded"
              onClick={() => handlePost()}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
