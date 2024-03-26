import React from 'react';
import { Container } from '@/components/container/container';
import Image from 'next/image';
import MainImage from '@/images/main-banner.png';
import ParkingCard from '@/components/cards/parkingCard';
import ParkingCardApp from '@/components/cards/parkingCardApp';

const Page = () => {
  return (
    <section className='main mt-20'>
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
                  <span className='text-black bg-white rounded-md px-2 leading-10'>
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
                  <span className='text-white bg-black rounded-md px-2 leading-10'>
                    private parking?
                  </span>
                </div>
              }
            />

            <ParkingCardApp
              text={
                <div className='text-white text-3xl	'>
                  <span className='text-green'>Open app </span> to <br /> get
                  all features
                </div>
              }
            />
          </div>
        </div>
      </Container>
      <div className='mt-10'></div>
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
                  <span className='text-black bg-white rounded-md px-2 leading-10'>
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
                  <span className='text-white bg-black rounded-md px-2 leading-10'>
                    private parking?
                  </span>
                </div>
              }
            />

            <ParkingCardApp
              text={
                <div className='text-white text-3xl	'>
                  <span className='text-green'>Open app </span> to <br /> get
                  all features
                </div>
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Page;
