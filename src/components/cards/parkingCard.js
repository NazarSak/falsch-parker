import React from 'react';
import Image from 'next/image';
import BusinessParking from '@/images/business-parking.png';
import PrivateParking from '@/images/private-parking.png';

const ParkingCard = ({ type, text }) => {
  let src = null;
  let alt = '';

  console.log('test-text', text);

  switch (type) {
    case 'businessParking':
      src = BusinessParking;
      alt = 'Business-parking';
      break;
    case 'privateParking':
      src = PrivateParking;
      alt = 'Private-parking';
      break;
  }

  return (
    <div className='w-[250px] relative h-[274px] flex justify-center items-center rounded-card overflow-hidden'>
      <div className='absolute top-0 left-0 z-[1] text-white p-4 text-xl'>
        {text}
      </div>
      <Image src={src} objectFit='cover' fill alt='Falsch-parker logo' />
    </div>
  );
};

export default ParkingCard;
