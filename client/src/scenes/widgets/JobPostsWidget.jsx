import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { setPosts } from '../../state';
import JobWidget from './JobWidget';

const JobPostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  // const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch('http://localhost:3001/jobs', {
      method: 'GET'
    });
    const data = await response.json();
    console.log(data);
    setPosts(data);
  };

  const getUserPosts = async () => {
    const response = await fetch(`http://localhost:3001/posts/${userId}/posts`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    getPosts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{posts ? posts.map((post) => <JobWidget post={post} />) : 'Loading..'}</>;
};

export default JobPostsWidget;
