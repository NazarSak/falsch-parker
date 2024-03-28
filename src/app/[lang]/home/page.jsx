'use client';
import React, { useRef } from 'react';
import { TrustedBySection } from '@/app/[lang]/home/components/sections/trustedBySection';
import { MainSection } from '@/app/[lang]/home/components/sections/mainSection';
import { OurProductsSection } from '@/app/[lang]/home/components/sections/ourProductsSection';
import { ParkingTicketSection } from '@/app/[lang]/home/components/sections/parkingTicketSection';
import { HowItWorks } from '@/app/[lang]/home/components/sections/howItWorks';

const Page = () => {
  const ourProductsSectionRef = useRef(null);

  const scrollToOurProductsSection = () => {
    ourProductsSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className='main mt-20'>
      <MainSection scrollTo={scrollToOurProductsSection} />
      <TrustedBySection />
      <OurProductsSection ref={ourProductsSectionRef} />
      <ParkingTicketSection />
      <HowItWorks />
    </section>
  );
};

export default Page;
