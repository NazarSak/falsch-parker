import React from 'react';
import Image from 'next/image';
import ParkingTicket from '@/images/home-page/parkingTicket.png';
import WhiteLabelSolution from '@/images/home-page/white-label-solution.png';
import { CrossShapeButton } from '@/components/buttons/shapeButtons/crossShapeButton';
import { ArrowRightShapeButton } from '@/components/buttons/shapeButtons/arrowRightShapeButton';

export const ParkingTicketSection = () => {
  return (
    <div className='flex h-[730px] w-full gap-5'>
      <div className='relative w-1/2 overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card'>
        <div className='absolute p-[80px] text-7xl text-dark'>
          <span>White label solution.</span>
        </div>
        <Image
          src={WhiteLabelSolution}
          alt='White label solution'
          className='object-cover'
        />
        <CrossShapeButton
          className='bg-white'
          onClick={() => {}}
          isLightTheme
        />
      </div>
      <div className='relative w-1/2 overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card'>
        <div className='absolute p-[80px] text-7xl text-dark'>
          <span>Parking ticket.</span>
        </div>
        <Image
          src={ParkingTicket}
          alt='Parking tocket'
          className='object-cover'
        />
        <ArrowRightShapeButton
          className='bg-white'
          onClick={() => {}}
          isLightTheme
        />
      </div>
    </div>
  );
};
