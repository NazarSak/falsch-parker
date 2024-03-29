import React from 'react';
import Image from 'next/image';
import MobileAppMap from '@/images/home-page/mobile-app-map.png';
import { ArrowRightShapeButton } from '@/components/buttons/shapeButtons/arrowRightShapeButton';

export const TrackTowingSection = () => {
  return (
    <div className='flex w-full gap-5 max-md:flex-col'>
      <div className='relative h-[730px] overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-md:h-[350px] md:w-1/2'>
        <div className='absolute top-0 z-[1] flex w-full flex-col p-8 text-center text-dark max-sm:text-5xl md:text-7xl'>
          <span>
            Track <br /> towing truck.
          </span>
          <span className='text-dark/50'>with live GPS</span>
        </div>
        <Image src={MobileAppMap} objectFit='cover' fill alt='No Parking' />
        <ArrowRightShapeButton className='bg-[#858585]' onClick={() => {}} />
      </div>

      <div className='relative h-[730px]  rounded-bl-card rounded-tl-card rounded-tr-card bg-green max-md:h-[350px] md:w-1/2'>
        <div className='top-0 z-[1] flex h-full w-full items-center justify-center bg-gradient-to-br from-white to-white/50 bg-clip-text  font-bold text-transparent text-white'>
          <span className='text-center  max-sm:text-5xl md:text-7xl'>
            Are you a towing company?
          </span>
        </div>

        <div className='absolute bottom-[19px] right-[90px] z-[1] text-base text-light'>
          <span>Join now</span>
        </div>
        <ArrowRightShapeButton className='bg-green' onClick={() => {}} />
      </div>
    </div>
  );
};
