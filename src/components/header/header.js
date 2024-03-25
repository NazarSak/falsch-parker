import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { headerNavigation } from '@/utils/navigations';
import logo from '../../../public/images/logo.png';

const Header = () => {
  return (
    <div className='flex h-[75px] border border-gray-800'>
      <Image src={logo} width={100} height={40} alt='Falsch-parker logo' />
      <ul className='w-full border border-gray-800 flex justify-between'>
        {headerNavigation.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className='bg-green-400'>BTN</div>
    </div>
  );
};

export default Header;
