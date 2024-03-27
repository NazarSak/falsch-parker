import React from 'react';
import Image from 'next/image';
import MobileLogo from '@/images/home-page/mobile-logo.png';

const ParkingCardApp = ({ text }) => {
  return (
    <div className='flex h-[205px] flex-col content-between justify-between rounded-[32px] bg-black p-4'>
      <span className='mt-4'>{text}</span>
      <Image
        src={MobileLogo}
        width={50}
        height={50}
        className='rounded-[18px]'
        alt='Mobile Falsch-parker logo'
      />
    </div>
  );
};

export default ParkingCardApp;
