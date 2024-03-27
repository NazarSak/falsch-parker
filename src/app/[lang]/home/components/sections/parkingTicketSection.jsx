import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/container/container';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';
import EyeIcon from '@/images/home-page/parkingTicketIcon/eye.svg';
import FormIcon from '@/images/home-page/parkingTicketIcon/form.svg';
import MarkIcon from '@/images/home-page/parkingTicketIcon/mark.svg';
import PhotoIcon from '@/images/home-page/parkingTicketIcon/photo.svg';
import NoParking from '@/images/home-page/no-parking.png';
import { OpenAppButton } from '@/components/buttons/openAppButton';
import { ShapeRoundButton } from '@/components/buttons/shapeRoundButton';

export const ParkingTicketSection = () => {
  return (
    <div className='my-[150px]'>
      <Container>
        <SectionTitle title='Parking ticket' />
        <div className='border-b border-black pb-14 text-8xl max-md:text-3xl'>
          Execute parking ticket on your business parkings now.
        </div>
        <div className='flex pt-[60px]'>
          <div className='flex-s flex w-1/2 items-start'>
            <Image
              src={EyeIcon}
              className='h-[60px] w-[60px] max-md:h-[30px] max-md:w-[30px]'
              alt='EyeIcon'
            />
            <Image
              src={FormIcon}
              className='z-[-1] ml-[-20px] h-[60px] w-[60px] max-md:ml-[-10px] max-md:h-[30px] max-md:w-[30px]'
              alt='FormIcon'
            />
            <Image
              src={MarkIcon}
              className='z-[-2] ml-[-20px] h-[60px] w-[60px] max-md:ml-[-10px] max-md:h-[30px] max-md:w-[30px]'
              alt='MarkIcon'
            />
            <Image
              src={PhotoIcon}
              className='z-[-3] ml-[-20px] h-[60px] w-[60px] max-md:ml-[-10px] max-md:h-[30px] max-md:w-[30px]'
              alt='PhotoIcon'
            />
          </div>
          <div className='flex w-1/2 justify-end'>
            <span className='max-w-[550px] text-3xl text-[#0D0F11] max-md:text-sm'>
              All from your phone! Use falsch-parker for hassle-free reporting
              of illegal parking.
            </span>
          </div>
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
    </div>
  );
};
