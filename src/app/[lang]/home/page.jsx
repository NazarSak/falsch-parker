import React from 'react';
import { TrustedBySection } from '@/app/[lang]/home/components/sections/trustedBySection';
import { MainSection } from '@/app/[lang]/home/components/sections/mainSection';
import { OurProductsSection } from '@/app/[lang]/home/components/sections/ourProductsSection';
import { ParkingTicketSection } from '@/app/[lang]/home/components/sections/parkingTicketSection';

const Page = () => {
  return (
    <section className='main mt-20'>
      <MainSection />
      <TrustedBySection />
      <OurProductsSection />
      <ParkingTicketSection />
    </section>
  );
};

export default Page;
