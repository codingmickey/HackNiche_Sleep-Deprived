import React, { useState } from 'react';

export default function JoinRoom() {
  const [room, setRoom] = useState(null);

  const onSubmit = () => {
    window.location.assign(`/video/${room}`);
  };

  return (
    <div className='mt-60 w-[75%] mx-auto flex justify-center'>
      <div>

      <input type="text" className='border-gray-300 border-[0.07rem] shadow-lg py-2 px-5 bg-grey' onChange={(e) => setRoom(e.target.value)} placeholder='Enter here'/>
      <button onClick={onSubmit} className="text-xl ml-5 border-[0.05] px-5 py-2 border-gray-300">Submit</button>
      </div>
    </div>
  );
}
