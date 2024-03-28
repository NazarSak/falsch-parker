import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/container/container';
import EyeIcon from '@/images/home-page/parkingTicketIcon/eye.svg';
import FormIcon from '@/images/home-page/parkingTicketIcon/form.svg';
import MarkIcon from '@/images/home-page/parkingTicketIcon/mark.svg';
import PhotoIcon from '@/images/home-page/parkingTicketIcon/photo.svg';
import NoParking from '@/images/home-page/no-parking.png';
import { OpenAppButton } from '@/components/buttons/openAppButton';
import { ShapeRoundButton } from '@/components/buttons/shapeRoundButton';
import { DivideBanner } from '@/components/separateBanner/divideBanner';

export const ParkingTicketSection = () => {
  return (
    <Container>
      <div className='mt-[170px]'>
        <DivideBanner
          sectionTitles={['Parking ticket']}
          title='Execute parking ticket on your business parkings now.'
          subtitle='All from your phone! Use falsch-parker for hassle-free reporting of illegal parking.'
          images={[EyeIcon, FormIcon, MarkIcon, PhotoIcon]}
        />
      </div>
      <div className='relative mt-[170px] h-[700px] w-full overflow-hidden rounded-bl-card  rounded-tl-card rounded-tr-card max-md:h-[580px]'>
        <div className='absolute left-0 z-[1] p-16'>
          <div className='mb-16 w-2/3 text-7xl leading-[1.2] text-red-600 max-md:w-full max-sm:text-3xl'>
            <span className='text-white'>Need to fine wrong parker?</span>
            <br />
            <span className='text-white/50'>We made it easy.</span>
          </div>
          <OpenAppButton />
        </div>
        <Image
          src={NoParking}
          objectFit='cover'
          fill
          objectPosition='right'
          alt='No Parking'
        />
        <ShapeRoundButton className='bg-[#0D0F11]' />
      </div>
    </Container>
  );
};
