import React from 'react';
import cl from 'classnames';

const PagingButton = ({ icon, direction, disabled, onClick }) => {
  const Icon = icon;

  return (
    <button
      disabled={disabled}
      className={cl(
        disabled ? 'pointer-events-none' : '',
        'group flex h-[52px] w-[52px] items-center justify-center rounded-full border border-dark text-dark transition-colors duration-300 hover:bg-dark hover:text-light disabled:opacity-50'
      )}>
      <Icon
        className={cl(
          'transition-transform duration-300 group-hover:scale-125',
          direction === 'left'
            ? 'group-hover:-translate-x-1'
            : 'group-hover:translate-x-1'
        )}
      />
    </button>
  );
};

export { PagingButton };
