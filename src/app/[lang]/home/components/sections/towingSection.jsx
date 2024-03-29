import React from 'react';
import { Container } from '@/components/container/container';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import EyeIcon from '@/images/home-page/icons/eye.svg';
import PhotoIcon from '@/images/home-page/icons/photo.svg';
import Towing from '@/images/home-page/icons/towing.svg';
import Image from 'next/image';
import UberTowing from '@/images/home-page/uber-towing-1.png';
import { CrossShapeButton } from '@/components/buttons/shapeButtons/crossShapeButton';

export const TowingSection = () => {
  return (
    <Container>
      <div className='my-[170px]'>
        <DivideBanner
          sectionTitles={['Towing']}
          title='Tow from business and private parkings now.'
          subtitle='We have 60 cars in our towing car pool and more than 12 towing companies are connected to our app.'
          images={[EyeIcon, PhotoIcon, Towing]}
        />
        <div className='relative mt-[170px] h-[700px] w-full overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-md:h-[580px]'>
          <div className='absolute z-[1] flex flex-col p-[100px] text-8xl text-white max-md:p-10 max-md:text-2xl'>
            <span className='text-white'>
              Uber <br />
              <span className='text-white/50'>for towing.</span>
            </span>
            <span className='mt-12 text-xl max-md:text-base'>
              Our app requires only 2 minutes of processing time.
            </span>
          </div>
          <Image
            src={UberTowing}
            objectFit='cover'
            fill
            objectPosition='bottom'
            alt='No Parking'
          />

          <CrossShapeButton className='bg-dark' onClick={() => {}} />
        </div>
      </div>
    </Container>
  );
};
