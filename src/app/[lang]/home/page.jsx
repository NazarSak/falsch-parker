import React from 'react';
import { TrustedBySection } from '@/app/[lang]/home/components/sections/trustedBySection';
import MainSection from '@/app/[lang]/home/components/sections/mainSection';
import { OurProductsSection } from '@/app/[lang]/home/components/sections/ourProducts';

const Page = () => {
  return (
    <section className='main mt-20'>
      <MainSection />
      <TrustedBySection />
      <OurProductsSection />
    </section>
  );
};

export default Page;
