import React from 'react';
import cl from 'classnames';
import Link from 'next/link';

const Chip = ({ text, active, href }) => {
  return (
    <Link
      href={href}
      className={cl(
        'flex h-[51px] shrink-0 items-center rounded-full border px-5 transition-colors duration-300',
        active
          ? 'border-dark bg-dark text-white'
          : 'border-dark/50 text-dark/50'
      )}>
      {text}
    </Link>
  );
};

export { Chip };
