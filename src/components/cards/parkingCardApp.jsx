import React from 'react';
import Image from 'next/image';
import MobileLogo from '@/images/home-page/mobile-logo.png';
import { ShapeRoundButton } from '@/components/buttons/shapeRoundButton';

export const ParkingCardApp = ({ text }) => {
  return (
    <div className='relative flex h-[205px] flex-col content-between justify-between rounded-card bg-black p-4'>
      <span className='mt-4'>{text}</span>
      <Image
        src={MobileLogo}
        width={50}
        height={50}
        className='rounded-[18px]'
        alt='Mobile Falsch-parker logo'
      />
      <ShapeRoundButton className={'bg-[#0D0F11]'} />
    </div>
  );
};
