import React, { useState } from 'react';
import Navbar1 from '../navbar/Navbar1';

export default function JoinRoom() {
  const [room, setRoom] = useState(null);

  const onSubmit = () => {
    window.location.assign(`/video/${room}`);
  };

  return (
    <>
      <Navbar1 />
      <div className="mt-60 w-[75%] mx-auto flex flex-columns justify-center">
        <div>
          <div>
            <input
              type="text"
              className="border-gray-300 border-[0.07rem] shadow-lg py-2 px-5 bg-grey"
              onChange={(e) => setRoom(e.target.value)}
              placeholder="Enter Room Name"
            />
          </div>
          <div>
            <button onClick={onSubmit} className="text-xl ml-11 mt-3 border-[0.05] px-5 py-2 border-gray-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 
