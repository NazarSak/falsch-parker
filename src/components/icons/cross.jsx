import React from 'react';
import cl from 'classnames';

export const Cross = ({ className }) => {
  return (
    <svg width='18' height='18' className={cl('stroke-current', className)}>
      <path
        d='M1 9L17 9M9 1L9 17'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
