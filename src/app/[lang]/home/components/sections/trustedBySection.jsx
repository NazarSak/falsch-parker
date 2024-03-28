import React from 'react';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';
import { InfiniteCarousel } from '@/app/[lang]/home/components/sections/components/infiniteCarousel';
import { Container } from '@/components/container/container';

export const TrustedBySection = () => {
  return (
    <div className='my-[150px]'>
      <Container>
        <SectionTitle title='Trusted by' />
      </Container>
      <InfiniteCarousel />
    </div>
  );
};
