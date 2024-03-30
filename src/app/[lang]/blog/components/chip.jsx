import React from 'react';
import cl from 'classnames';

const Chip = ({ text, active }) => {
  return (
    <button
      className={cl(
        'flex h-[51px] items-center rounded-full border px-5 transition-colors duration-300',
        active
          ? 'border-dark bg-dark text-white'
          : 'border-dark/50 text-dark/50'
      )}>
      {text}
    </button>
  );
};

export { Chip };
