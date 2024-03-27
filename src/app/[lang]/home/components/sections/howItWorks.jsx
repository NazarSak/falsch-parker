import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/container/container';
import { OpenAppButton } from '@/components/buttons/openAppButton';
import Claim from '@/images/home-page/claim.png';

export const HowItWorks = () => {
  return (
    <Container>
      <h1 className='m-0 p-0 text-8xl text-dark'>
        See how <br /> it works.
      </h1>
      <div className='relative mt-[80px] h-[700px] w-full overflow-hidden rounded-card max-md:h-[580px]'>
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
