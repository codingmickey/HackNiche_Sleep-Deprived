import ExploreCard from 'components/ExploreCard';
import React from 'react';
import Navbar from 'scenes/navbar';
import Navbar1 from 'scenes/navbar/Navbar1';

export const Explore = () => {
  const data = [
    {
      title: 'Job Employment',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas. Mauris eu pharetra sem. ',
      img: 'job-explore.png',
    },
    {
      title: 'Support',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas. Mauris eu pharetra sem. ',
      img: 'support.jpeg',
    },
    {
      title: 'Community',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas. Mauris eu pharetra sem. ',
      img: 'community.jpeg',
    },
    {
      title: 'Pension',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas. Mauris eu pharetra sem. ',
      img: 'pension2.jpeg',
    },
  ];

  return (
    <>
      <Navbar1 />
      <div className="mt-28 flex justify-evenly">
        {data.map((item, i) => {
          return <ExploreCard item={item} key={i} />;
        })}
      </div>
    </>
  );
};
