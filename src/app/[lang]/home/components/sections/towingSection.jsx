import React from 'react';
import { Container } from '@/components/container/container';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import EyeIcon from '@/images/home-page/icons/eye.svg';
import PhotoIcon from '@/images/home-page/icons/photo.svg';
import Towing from '@/images/home-page/icons/towing.svg';
import { UberSection } from '@/app/[lang]/home/components/sections/components/towingSections/uberSection';
import { HowItWorksSection } from '@/app/[lang]/home/components/sections/components/towingSections/howItWorksSection';
import { TrackTowingSection } from '@/app/[lang]/home/components/sections/components/towingSections/trackTowingSection';

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
      </div>
      <UberSection />
      <HowItWorksSection />
      <TrackTowingSection />
    </Container>
  );
};
