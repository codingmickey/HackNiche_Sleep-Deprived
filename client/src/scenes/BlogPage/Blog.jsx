import React, { useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from 'react-markdown';
import Navbar1 from '../navbar/Navbar1';
import useFetch from 'use-http';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

export const Blog = ({}) => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('**Hello world!!!**');
  const [title, setTitle] = React.useState('');
  const [des, setDes] = React.useState('');
  const [blog, setBlog] = React.useState('i');
  const [tags, setTags] = React.useState('All');

  useEffect(() => {
    fetch('http://localhost:3001/blogs', { method: 'GET' })
      .then((results) => results.json())
      .then((data) => {
        const res = data;
        // console.log(res);
        setBlog([...res]);
        console.log(blog);
        // console.log(res);
      });
  }, []);

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

  const data = [
    {
      title: 'INDIA-CHINA LADAKH LAC ISSUE',
      head: '10TH ROUND OF TALKS ON SATURDAY',
      data1: ' With the first round of disengagement between the Indian and Chinese troops completed at Pangong Tso',
      data2:
        'As per the understanding reached between the two sides, at the end of first round of disengagement,within 48 hours the Corps Commanders will meet',
      data3: 'With the first round of disengagement between the Indian and Chinese troops completed at Pangong Tso',
      img: 'https://iesm.org/uploads/posts/PLA_Border_Tank_Disengagement_16.jpg',
      by: 'by Harshad Humane - 3 May 2022',
      tag: 'Army'
    },
    {
      title: 'INDIAS DEFENCE PREPAREDNESS - A VIEW IN CONTEXT OF NATIONAL ECONOMY',
      head: 'IS DEFENCE CESS ON THE CARDS?',
      data1: ' The relationship between defence expenditure and national economy is complex. ',
      data2:
        'The 2019 military expenditure database of the Stockholm International Peace Research Institute (SIPRI), released in April 2020, ranks India third, behind the United States (US)',
      data3: 'While INDIAs GDP growth rate has been fluctuating in the last few years.',
      img: 'https://iesm.org/uploads/posts/Defence_Manufacturing_71.jpg',
      by: 'by Kartik Jolapara - 15 June 2022',
      tag: 'Air Force'
    },
    {
      title: 'Drone Incursions on Rise:',
      head: 'New form of Cross-Border Terrorism',
      data1:
        ' As per the data released by the Government of India, 171 unmanned aerial vehicles (UAV) or drones from Pakistan entered Punjab',
      data2: '1 January 2022 to 30 September 2022. Another 20 were seen in the Jammu sector,',
      data3:
        'Another 20 were seen in the Jammu sector, making the total 191. Seven were reportedly shot down by the Border Security Force (BSF)',
      img: 'http://www.indiandefencereview.com/wp-content/uploads/2020/03/Drone-Swarms.jpg',
      by: 'by Abhijit Shah - 1 May 2022',
      tag: 'Air Force'
    },
    {
      title: 'Domination Depends on Naval Prowess:',
      head: 'Challenges for the Indian Navy in Future',
      data1:
        'After, the Battle of Trafalgar in October 21, 1805  when Nelson with his superior and organized armada defeated Napoleon',
      data2:
        'The trials of India’s first indigenous aircraft carrier (IAC-1) Vikrant successfully completed key systems of the 40,000-tonne warship',
      data3:
        'The delivery of the ship is being targeted celebrations the 75th anniversary of India’s independence ‘Azadi Ka Amrit Mahotsav',
      img: 'http://www.indiandefencereview.com/wp-content/uploads/2012/02/Indian_Navy_CPSMB-045.jpg',
      by: 'by Meet Patel - 24 August 2022',
      tag: 'Navy'
    }
  ];

  return (
    <>
      {/* {blog != [] && <ReactMarkdown>{blog[6].body}</ReactMarkdown>} */}
      <Navbar1 />
      <div className="text-3xl tracking-wider mt-10 mb-5 font-medium text-center text-orange">Blogs</div>
      <div className="justify-between w-[80%] mx-auto mt-10">
        <div className="w-[75%] mx-auto flex gap-10 justify-start items-center">
          <div className=" flex items-center bg-grey py-[0.5rem] w-  shadow">
            <SearchIcon className="text-3xl ml-3   cursor-pointer" />
            <input
              className="bg-transparent text- h-8 p-2 text-xs w-[12rem] xl:w-  outline-none"
              type="text"
              placeholder="Search by Blog"
              name="search"
            ></input>
          </div>
          {/* <div className="mt-4 text-lg font-medium">Filter by Tags</div> */}
          <div className="flex justify-between w-[55%]">
            <div
              className={`${
                tags == 'All' && 'bg-blue-500 text-white'
              } border-[0.08rem] border-gray-300 text-logo text-base py-2 tracking-widest px-5 shadow-md rounded cursor-pointer hover:shadow-xl`}
              onClick={() => setTags('All')}
            >
              All
            </div>
            <div
              className={`${
                tags == 'Army' && 'bg-blue-500 text-white'
              } border-[0.08rem] border-gray-300 text-logo text-base py-2 tracking-widest px-5 shadow-md rounded cursor-pointer hover:shadow-xl`}
              onClick={() => setTags('Army')}
            >
              Army
            </div>
            <div
              className={`${
                tags == 'Navy' && 'bg-blue-500 text-white'
              } border-[0.08rem] border-gray-300 text-logo text-base py-2 tracking-widest px-5 shadow-md rounded cursor-pointer hover:shadow-xl`}
              onClick={() => setTags('Navy')}
            >
              Navy
            </div>
            <div
              className={`${
                tags == 'Air Force' && 'bg-blue-500 text-white'
              } border-[0.08rem] border-gray-300 text-logo text-base py-2 tracking-widest px-5 shadow-md rounded cursor-pointer hover:shadow-xl`}
              onClick={() => setTags('Air Force')}
            >
              Air Force
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60%] mx-auto">
        {data.map((item) => {
          if (tags == 'All' || tags == item.tag) {
            return (
              <div
                key={item.by}
                className="w-full bg-white border-grey border-[0.07rem] px-5 py-5 rounded-md shadow-md mt-7"
              >
                <div className="text-2xl font-medium">{item.title}</div>
                <div className="mt-2 text-[1rem] font-medium">{item.sub}</div>
                <div className="flex gap-5 w-full">
                  <div className="w-[60%] pr-5 leading-relaxed tracking-wider">
                    <div className="mt-2 text-[1rem] ">{item.data1}</div>
                    <div className="mt-4 text-[1rem]">{item.data2}</div>
                    <div className="mt-4 text-[1rem]">{item.data3}</div>
                    <div className="mt-4 text-[1rem]">{item.by}</div>
                  </div>
                  <div className="w-[35%]">
                    <img src={item.img} className="w-full h-[90%] rounded-xl" />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      {/* <div className="w-[60%]">{blog[0] ? <ReactMarkdown>{blog[0].body}</ReactMarkdown> : '...loading'}</div> */}

      <div className="w-[75%] mx-auto mt-10">
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
