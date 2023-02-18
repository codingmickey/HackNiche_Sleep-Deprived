import ExploreCard from '../../components/ExploreCard';
import React from 'react';
// import Navbar from '../navbar';
import Navbar1 from '../navbar/Navbar1';
import { FontSize } from '../FontSize';

export const Explore = () => {
  const data = [
    {
      title: 'Job Employment',
      data: 'For army men and women seeking job opportunities the same as civilians do.',
      img: 'job-explore.png'
    },
    {
      title: 'Support',
      data: 'The trauma of living under circumstances unknown to civilians changes people. In these dire times it becomes necessary to offer support. ',
      img: 'support.jpeg'
    },
    {
      title: 'Community',
      data: 'A community of people to offer their experiences and get  acquainted with the ever so changing neighbourhood. ',
      img: 'community.jpeg'
    },
    {
      title: 'Pension',
      data: 'Knowledge of Schemes and Pension Calculator is something which is required by  many. ',
      img: 'pension2.jpeg'
    }
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
