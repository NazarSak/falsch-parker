import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/container/container';
import { OpenAppButton } from '@/components/buttons/openAppButton';
import MobileParkingCar from '@/images/home-page/mobil-parking-car.png';
import Claim from '@/images/home-page/claim.png';
import { ShapeRoundButton } from '@/components/buttons/shapeRoundButton';

export const HowItWorks = () => {
  return (
    <Container>
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
            <div className='flex justify-between py-5 text-2xl'>
              <span className='text-dark'>
                Take a picture of wrong parker.{' '}
              </span>
              <span className='ml-5 text-dark/50'>01</span>
            </div>
            <div className='flex items-center justify-between border-y-[1px] border-dark/10 py-5 text-2xl'>
              <span className='text-dark'>
                Check that illegal parking situation is well documented.
              </span>
              <span className='ml-5 text-dark/50'>02</span>
            </div>
            <div className='flex  justify-between py-5 text-2xl'>
              <span className='text-dark'>Confirm the location.</span>
              <span className='ml-5 text-dark/50'>03</span>
            </div>
          </div>
        </div>
        <ShapeRoundButton className={'bg-[white]'} />
      </div>

      <div className='relative h-[700px] w-full overflow-hidden rounded-card max-md:h-[580px]'>
        <div className='absolute left-0 z-[1] h-full p-16'>
          <div className='flex h-full w-full items-center'>
            <div className='flex h-full max-h-[355px] w-full max-w-[500px] flex-col justify-between text-white '>
              <h4 className='text-7xl max-sm:text-6xl'>Claim.</h4>
              <span className='text-xl max-sm:text-sm'>
                As a property owner or tenant, you have the right to claim
                compensation for illegal parking. Falsch-Parker.ch offers the
                necessary infrastructure and handles the entire processing for
                you.
              </span>
              <OpenAppButton />
            </div>
          </div>
        </div>
        <Image
          src={Claim}
          objectFit='cover'
          fill
          objectPosition='middle'
          alt='No Parking'
        />
      </div>
    </Container>
  );
};
