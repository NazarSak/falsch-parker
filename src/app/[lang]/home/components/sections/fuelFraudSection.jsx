import React from 'react';
import { Container } from '@/components/container/container';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import RefillIcon from '@/images/home-page/icons/refill.svg';
import CoinIcon from '@/images/home-page/icons/coin.svg';
import LikeIcon from '@/images/home-page/icons/like.svg';
import { TheProblemSection } from '@/app/[lang]/home/components/sections/components/fuelFroundSections/theProblemSection';
import { HowItWorksSection } from '@/app/[lang]/home/components/sections/components/fuelFroundSections/howItWorksSection';
import { SaveSection } from '@/app/[lang]/home/components/sections/components/fuelFroundSections/saveSection';

export const FuelFraudSection = () => {
  return (
    <Container>
      <div className='my-[170px]'>
        <DivideBanner
          sectionTitles={['Fuel fraud']}
          title='Significantly reduce fuel fraud at gas stations.'
          subtitle='Wrong Parker offers an efficient solution for gas stations to manage and reduce fuel fraud.'
          images={[RefillIcon, CoinIcon, LikeIcon]}
        />
      </div>
      <TheProblemSection />
      <HowItWorksSection />
      <SaveSection />
    </Container>
  );
};
