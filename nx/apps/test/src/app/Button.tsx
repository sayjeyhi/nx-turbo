"use client";

import { useState } from 'react';
import { handleClick } from './clickHandler';

const Button = () => {
  const [hovered, setHovered] = useState(false);
  const [message, setMessage] = useState('');
  return (
    <>
      <p>{message}</p>
      <button
        onClick={async () => {
          const {message} = await handleClick();
          setMessage(message);
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${hovered ? 'bg-blue-700' : ''}`}
      >
        Test
      </button>
    </>
  );
};

export default Button;
