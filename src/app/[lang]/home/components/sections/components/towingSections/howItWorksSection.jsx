import React from 'react';
import Image from 'next/image';
import MobileParkingCar from '@/images/home-page/mobil-parking-car.png';
import { ArrowRightShapeButton } from '@/components/buttons/shapeButtons/arrowRightShapeButton';

export const HowItWorksSection = () => {
  const goTo = () => {};
  return (
    <div className='relative overflow-hidden'>
      <h1 className='mb-[80px] mt-[170px] p-0 text-8xl text-dark'>
        See how <br /> it works.
      </h1>
      <div className='relative mb-10 mt-5 flex h-[760px] rounded-card bg-white max-md:flex-col'>
        <div className='relative h-full w-1/2 max-md:w-full max-md:pl-0'>
          <Image
            src={MobileParkingCar}
            objectFit='contain'
            fill
            alt='No Parking'
            className='ml-[16%] mt-[10%] max-md:ml-[10%] max-md:mt-[5%]'
          />
        </div>
        <div className='flex h-[760px] w-1/2 items-center justify-center max-md:w-full'>
          <div className='max-w-[530px] px-5'>
            <div className='flex flex-col justify-between py-5 text-2xl text-dark'>
              <span className='pb-9 text-7xl'>Tow away.</span>
              <span className='text-xl'>
                To ensure legal certainty, take a clear photo of the illegally
                parked vehicle with its license plate visible. Remember, a court
                prohibition notice is required for compensation claims.
              </span>
            </div>
          </div>
        </div>
        <ArrowRightShapeButton
          className={'bg-[white]'}
          isLightTheme
          onClick={goTo()}
        />
      </div>
    </div>
  );
};
