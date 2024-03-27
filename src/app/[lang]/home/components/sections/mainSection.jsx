import React from 'react';
import Image from 'next/image';
import MainImage from '@/images/home-page/main-banner.png';
import ParkingCard from '@/components/cards/parkingCard';
import { ParkingCardApp } from '@/components/cards/parkingCardApp';
import { Container } from '@/components/container/container';

export const MainSection = () => {
  return (
    <Container>
      <div className='flex'>
        <div className='w-full'>
          <Image
            src={MainImage}
            width='100%'
            height='100%'
            alt='Falsch-parker logo'
            className='rounded-card'
          />
        </div>
        <div className='flex flex-col gap-5'>
          <ParkingCard
            type='businessParking'
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
