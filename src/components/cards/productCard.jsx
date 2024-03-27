'use client';

import React from 'react';
import Image from 'next/image';
import FuelFraud from '@/images/home-page/product/fuel-fraud..png';
import ParkingFines from '@/images/home-page/product/parking-fines.png';
import RequestTruck from '@/images/home-page/product/request-truck.png';
import { ShapeRoundButton } from '@/components/buttons/shapeRoundButton';

export const ProductCard = ({ title, subtitle, type, className }) => {
  let src = null;
  let alt = '';

  switch (type) {
    case 'fuelFraud':
      src = FuelFraud;
      alt = 'Fuel Fraud';
      break;
    case 'parkingFines':
      src = ParkingFines;
      alt = 'Parking Fines';
      break;
    case 'requestTruck':
      src = RequestTruck;
      alt = 'Request Truck';
      break;
  }

  return (
    <div className='rounded-br-0 h-[680px] w-[440px] cursor-pointer overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card'>
      <div className='group relative h-[680px] w-[440px] transform  rounded-card grayscale transition duration-500 ease-in-out hover:grayscale-0'>
        <div className='absolute z-[2] p-10 text-5xl text-white'>{title}</div>
        <div className='relative h-[680px] w-[440px] '>
          <Image
            src={src}
            objectFit='cover'
            className='duration-500 ease-in-out group-hover:scale-105'
            fill
            alt={alt}
          />
        </div>
        <div className='absolute bottom-0 z-[2] p-10 pr-14 text-lg text-white/50 transition duration-500 ease-in-out group-hover:text-white'>
          {subtitle}
        </div>

        <ShapeRoundButton className={className} />
      </div>
    </div>
  );
};
