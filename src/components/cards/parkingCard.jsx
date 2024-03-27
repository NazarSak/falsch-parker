import React from 'react';
import Image from 'next/image';
import BusinessParking from '@/images/home-page/business-parking.png';
import PrivateParking from '@/images/home-page/private-parking.png';

const ParkingCard = ({ type, text }) => {
  let src = null;
  let alt = '';

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
    <div className='relative flex h-[274px] w-[250px] items-center justify-center overflow-hidden rounded-card'>
      <div className='absolute left-0 top-0 z-[1] p-4 text-xl text-white'>
        {text}
      </div>
      <Image src={src} objectFit='cover' fill alt='Falsch-parker logo' />
    </div>
  );
};

export default ParkingCard;
