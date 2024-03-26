'use client';

import React from 'react';
import { ArrowUp } from '@/components/icons/arrowUp';

const RoundButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='bg-dark group flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white transition-colors duration-300 hover:bg-white'>
      <ArrowUp className='transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-black' />
    </button>
  );
};

export { RoundButton };
