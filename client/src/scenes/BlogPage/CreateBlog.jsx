import React, { useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from 'react-markdown';
import Navbar1 from '../navbar/Navbar1';
import useFetch from 'use-http';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

export const CreateBlog = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('**Hello world!!!**');
  const [title, setTitle] = React.useState('');
  const [des, setDes] = React.useState('');
  const [docs, Docs] = React.useState('');
  const [content, setContent] = React.useState('')
  const [blog, setBlog] = React.useState('i');
  const [tags, setTags] = React.useState('All');

  const handlePost = async () => {
    let response = await axios.post('http://localhost:3001/blogs', {
      title: title,
      body: value
    });
    console.log(response);
    if (response.status === 200 || response.status == 201) {
      alert('Blog post successfully');
      navigate('/blog');
    }
  };

  return (
    <>
      <Navbar1 />
      <div className="w-[75%] mx-auto mt-3">
        <div className="container">
          <div className="text-xl mb-5 font-medium">Post your personalised blogs here</div>
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

          <div className="text-lg">Content:</div>
          <textarea
            type="text"
            name="des"
            value={des}
            rows='10'
            onChange={(e) => setContent(e.target.value)}
            className="placeholder:text-[1.0rem]  bg-grey border-[0.08rem] border-gray-300 outline-none py-[0.5rem] px-4 mt-2 w-full mb-4"
            placeholder="Enter description here"
          />
              <input
                type="file"
                className="placeholder:text-[1.0rem] bg-gray-100 outline-none py-1 px-4 mt-2 w-full"
                value={docs}
                onChange={(e) => Docs(e.target.value)}
              />
          {/* </div> */}
          {/* <MDEditor value={value} onChange={setValue} />
          <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap', height: '250px' }} /> */}
        </div>
        <div className="mt-2 mb-4 flex justify-center">
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
      <div className="mt-10 h-4" />
    </>
  );
};

export default CreateBlog;
