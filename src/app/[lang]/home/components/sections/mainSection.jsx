'use client';

import React from 'react';
import Image from 'next/image';
import { ParkingCard } from '@/components/cards/parkingCard';
import { ParkingCardApp } from '@/components/cards/parkingCardApp';
import { Container } from '@/components/container/container';
import { MainOpenAppShape } from '@/app/[lang]/home/components/sections/components/mainOpenAppShape';
import MainBanner from '@/images/home-page/main-banner.png';
import { useRouter } from 'next/navigation';

export const MainSection = ({ scrollTo }) => {
  const router = useRouter();
  const gotToBusinessParking = () => {
    router.push('/app');
  };

  const gotToPrivateParking = () => {
    router.push('/app');
  };

  const gotToApp = () => {
    router.push('/app');
  };

  return (
    <Container>
      <div className='flex gap-5'>
        <div className='relative w-full bg-light'>
          <MainOpenAppShape scrollTo={scrollTo} />
          <Image
            src={MainBanner}
            fill
            alt='Falsch-parker logo'
            className='rounded-card object-cover'
          />
        </div>
        <div className='flex flex-col gap-5'>
          <ParkingCard
            type='businessParking'
            onClick={gotToBusinessParking}
            text={
              <div className=''>
                Wrong parkers on your{' '}
                <span className='rounded-md bg-light px-2 leading-10 text-black'>
                  business parking?
                </span>
              </div>
            }
          />
          <ParkingCard
            type='privateParking'
            onClick={gotToPrivateParking}
            text={
              <div>
                Wrong parkers on your{' '}
                <span className='rounded-md bg-black px-2 leading-10 text-white'>
                  private parking?
                </span>
              </div>
            }
          />

          <ParkingCardApp
            onClick={gotToApp}
            text={
              <div className='text-3xl text-white	'>
                <span className='text-green'>Open app </span> to <br /> get all
                features
              </div>
            }
          />
        </div>
      </div>
    </Container>
  );
};
