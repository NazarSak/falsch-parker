'use client';
import React from 'react';
import Image from 'next/image';
import { OpenAppButton } from '@/components/buttons/openAppButton';
import { ArrowDownShapeButton } from '@/components/buttons/shapeButtons/arrowDownShapeButton';
import NoParkingImage from '@/images/global/no-parking.png';
export const NoParking = ({ onClick }) => {
  return (
    <div className='relative h-[700px] w-full overflow-hidden rounded-bl-card rounded-tl-card  rounded-tr-card max-md:h-[580px]'>
      <div className='absolute left-0 z-[1] p-16'>
        <div className='mb-16 w-2/3 text-7xl leading-[1.2] text-red-600 max-md:w-full max-md:text-3xl'>
          <span className='text-white'>Need to fine wrong parker?</span>
          <br />
          <span className='text-white/50'>We made it easy.</span>
        </div>
        <OpenAppButton />
      </div>
      <Image
        src={NoParkingImage}
        fill
        alt='No Parking'
        className='object-cover object-right max-sm:object-center'
      />
      <ArrowDownShapeButton className='bg-[#0D0F11]' onClick={onClick} />
    </div>
  );
};
