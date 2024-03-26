import React from 'react';
import { ArrowRight } from '@/components/icons/arrowRight';
import { Dot } from '@/components/icons/dot';

const ContactUs = () => {
  return (
    <button className='text-light group relative flex h-[51px] w-[140px] items-center justify-center overflow-hidden rounded-full border border-white font-light transition-colors duration-300 hover:bg-white'>
      <div className='flex items-center'>
        <ArrowRight className='absolute left-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-4 group-hover:text-black' />
        <span className='transition-all duration-300 group-hover:translate-x-5 group-hover:text-black'>
          Contact us
        </span>
      </div>
      <Dot className='ml-4 transition-transform duration-300 group-hover:scale-0' />
    </button>
  );
};

export { ContactUs };
