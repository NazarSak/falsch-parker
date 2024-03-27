import React from 'react';
import { Container } from '@/components/container/container';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';
import { ProductCard } from '@/components/cards/productCard';

export const OurProductsSection = () => {
  return (
    <Container>
      <SectionTitle title='Our products' />
      <div className='flex w-full gap-3'>
        <ProductCard
          type='fuelFraud'
          className='bg-[#6A797F]'
          title='Parking fines.'
          subtitle='Legally issue a parking fine on private property. For individuals and companies.'
        />
        <ProductCard
          type='parkingFines'
          className='bg-[#111E28]'
          title='Request a tow truck.'
          subtitle='Largest tow service provider pool with a maximum waiting time of 17 minutes.'
        />
        <ProductCard
          type='requestTruck'
          className='bg-[#353D4B]'
          title='Fuel fraud.'
          subtitle='Our app requires only 2 minutes of processing time.'
        />
      </div>
    </Container>
  );
};
