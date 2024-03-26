import React from 'react';
import Link from 'next/link';

const AppButton = ({ href, icon, children }) => {
  const Icon = icon;
  return (
    <Link
      href={href}
      className='bg-dark group flex h-[51px] w-[167px] items-center gap-3 rounded-full border border-white px-6 transition-colors duration-300 hover:bg-white hover:text-black'>
      <Icon className='' />
      <span>{children}</span>
    </Link>
  );
};

export { AppButton };
