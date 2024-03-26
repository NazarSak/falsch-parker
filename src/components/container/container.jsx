import React from 'react';

export const Container = ({ children }) => {
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='max-w-[1360px] w-full'>{children}</div>
    </div>
  );
};
