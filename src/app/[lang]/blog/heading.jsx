import React from 'react';
import { Input } from './components';

const Heading = () => {
  return (
    <section className='my-20'>
      <div className='border-b border-dark text-[127px]'>Latest news</div>
      <div className='mt-10 flex justify-between'>
        <Input action='Subscribe' placeholder='Enter your email' />
        <p className='text-[32px]'>
          Discover the latest updates about
          <br /> our app, services and so on
        </p>
      </div>
    </section>
  );
};

export { Heading };
