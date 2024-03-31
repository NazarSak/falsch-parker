import React from 'react';
import { Container } from '@/components/container/container';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import { YouCttvSection } from '@/app/[lang]/home/components/sections/components/otherFeaturesSection/youCttvSection';
import VideoCamera from '@/images/home-page/icons/videoСamera.svg';
import Picture from '@/images/home-page/icons/picture.svg';
import Blank from '@/images/home-page/icons/blank.svg';
import { ParkingTicketSection } from '@/app/[lang]/home/components/sections/components/otherFeaturesSection/parkingTicketSection';

export const OtherFeaturesSection = () => {
  return (
    <Container>
      <div className='my-[120px]'>
        <DivideBanner
          sectionTitles={[
            'CCTV & AI',
            'White label solution',
            'Parking ticket',
          ]}
          title='Other features we offer for our clients.'
          subtitle='Learn how we use AI to help you fine wrong parkers. And discover our white label solution for companies.'
          images={[VideoCamera, Picture, Blank]}
        />
        <div className='mb-5 mt-[100px]'>
          <YouCttvSection />
        </div>
        <ParkingTicketSection />
      </div>
    </Container>
  );
};
