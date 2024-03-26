import React from 'react';
import WhitePoint from '@/icons/white-point.svg';
import Image from 'next/image';

const PayFineButton = ({ text = '' }) => {
  return (
    <div className='px-5 py-4 rounded-full bg-green flex items-center border-none text-white shrink-0 cursor-pointer'>
      <span>{text}</span>
      <div className='pl-4'>
        <Image src={WhitePoint} width={4} height={4} alt='Point' />
      </div>
    </div>
  );
};

export default PayFineButton;
