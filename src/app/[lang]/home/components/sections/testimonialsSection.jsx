import React from 'react';
import { Container } from '@/components/container/container';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';
import { WhatClientsSay } from '@/app/[lang]/home/components/sections/components/testimonialsSections/whatClientsSay';
import { JoinSection } from '@/app/[lang]/home/components/sections/components/testimonialsSections/joinSection';

export const TestimonialsSection = () => {
  return (
    <Container>
      <div className='my-[170px]'>
        <div className='mb-9'>
          <SectionTitle title='Testimonials' />
        </div>
        <WhatClientsSay />
      </div>
      <div className='mb-20'>
        <JoinSection />
      </div>
    </Container>
  );
};
