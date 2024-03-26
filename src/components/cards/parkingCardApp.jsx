import React from 'react';
import Image from 'next/image';
import MobileLogo from '@/images/mobile-logo.png';

const ParkingCardApp = ({ text }) => {
  return (
    <div className='h-[205px] bg-black rounded-[32px] p-4 flex flex-col content-between justify-between'>
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
