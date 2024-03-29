import React from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';

export const DivideBanner = ({
  sectionTitles = [],
  title,
  subtitle,
  images,
}) => {
  return (
    <>
      <div className='flex gap-2 max-sm:flex-col'>
        {sectionTitles.map((title, index) => (
          <SectionTitle title={title} key={index} />
        ))}
      </div>
      <div className='border-b border-black pb-14 text-8xl max-md:text-3xl'>
        {title}
      </div>
      <div className='flex pt-[60px]'>
        <div className='flex-s flex w-1/2 items-start'>
          {images?.length &&
            images.map((src, index) => {
              if (index === 0) {
                return (
                  <Image
                    key={uuidv4()}
                    src={src}
                    className='h-[60px] w-[60px] max-md:h-[30px] max-md:w-[30px]'
                    alt='EyeIcon'
                  />
                );
              } else {
                return (
                  <Image
                    key={uuidv4()}
                    src={src}
                    className={`ml-[-20px] h-[60px] w-[60px] max-md:ml-[-10px] max-md:h-[30px] max-md:w-[30px]`}
                    style={{ zIndex: -index }}
                    alt='FormIcon'
                  />
                );
              }
            })}
        </div>
        <div className='flex w-1/2 justify-end'>
          <span className='max-w-[550px] text-3xl text-[#0D0F11] max-md:text-sm'>
            {subtitle}
          </span>
        </div>
      </div>
    </>
  );
};