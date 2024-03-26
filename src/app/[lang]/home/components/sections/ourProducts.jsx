import React from 'react';
import { Container } from '@/components/container/container';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';
import ProductCard from '@/components/cards/productCard';

export const OurProductsSection = () => {
  return (
    <Container>
      <SectionTitle title='Our products' />
      <div className='w-full border border-black'>
        <ProductCard />
      </div>
    </Container>
  );
};
