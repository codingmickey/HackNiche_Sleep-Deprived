import ExploreCard from '../../components/ExploreCard';
import React, { useState } from 'react';
import Navbar1 from '../navbar/Navbar1';
import { Link } from 'react-router-dom';

export const Explore = () => {
  const data = [
    {
      title: 'Job Employment',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas. Mauris eu pharetra sem. ',
      img: 'job-explore.png'
    },
    {
      title: 'Support',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas. Mauris eu pharetra sem. ',
      img: 'support.jpeg'
    },
    {
      title: 'Community',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas. Mauris eu pharetra sem. ',
      img: 'community.jpeg'
    },
    {
      title: 'Pension',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas. Mauris eu pharetra sem. ',
      img: 'pension2.jpeg'
    }
  ];

  return (
    <>
      <Navbar1 />
      <div className="mt-28 flex justify-evenly">
        <Link to="/jobs">
          <ExploreCard item={data[0]} />;
        </Link>
        <Link to="">
          <ExploreCard item={data[1]} />;
        </Link>
        <Link to="">
          <ExploreCard item={data[2]} />;
        </Link>
        <Link to="/pension">
          <ExploreCard item={data[3]} />;
        </Link>
        {/* {data.map((item, i) => {
        })} */}
      </div>
    </>
  );
};
