import React from 'react';
import { Container } from '@/components/container/container';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';
import { WhatClientsSay } from '@/app/[lang]/home/components/sections/components/testimonialsSections/whatClientsSay';
import { JoinSection } from '@/app/[lang]/home/components/sections/components/testimonialsSections/joinSection';

export const TestimonialsSection = () => {
  return (
    <Container>
      <div className='mb-9 mt-[170px]'>
        <SectionTitle title='Testimonials' />
      </div>
      {/*<WhatClientsSay />*/}
      <JoinSection />
    </Container>
  );
};
