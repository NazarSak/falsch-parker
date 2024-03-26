import React from 'react';

export const SectionTitle = ({ title }) => {
  return (
    <div className='py-9'>
      <span className='text-[#0D0F11] flex-1  border border-[#0D0F11] px-5 py-2 rounded-full'>
        {title}
      </span>
    </div>
  );
};
