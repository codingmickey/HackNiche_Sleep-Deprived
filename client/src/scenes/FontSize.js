import React, { Component } from 'react';
import FontSizeChanger from 'react-font-size-changer';

export const FontSize = () => {
  return (
    <div>
      <FontSizeChanger
        targets={['*']}
        onChange={(element, newValue, oldValue) => {
          console.log(element, newValue, oldValue);
        }}
        options={{
          stepSize: 1,
          range: 2
        }}
        customButtons={{
          up: <span style={{ fontSize: '30px' }}>A</span>,
          down: <span style={{ fontSize: '15px' }}>A</span>,
          style: {
            backgroundColor: 'orange',
            color: 'white',
            WebkitBoxSizing: 'border-box',
            WebkitBorderRadius: '5px',
            width: '60px'
          },
          buttonsMargin: 10
        }}
      />
    </div>
  );
};
