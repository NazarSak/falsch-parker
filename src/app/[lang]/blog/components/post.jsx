import React from 'react';
import Image from 'next/image';
import { ArrowRight } from '@/components/icons/arrowRight';
import styles from './styles.module.scss';
import cl from 'classnames';

const Post = ({ imageSrc, time, tag, title, description }) => {
  return (
    <div className='relative'>
      <div className='relative h-[730px] w-full overflow-hidden rounded-[40px] text-white'>
        <Image src={imageSrc} alt='banner' fill className='object-cover' />
        <div className='absolute bottom-0 flex h-[255px] w-full flex-col justify-between rounded-t-[40px] bg-dark/50 p-10 backdrop-blur-xl'>
          <div className='flex items-center justify-between opacity-50'>
            <div className='flex h-[35px] items-center rounded-full border border-white px-4'>
              {tag}
            </div>
            <span>{time} min read</span>
          </div>
          <span className='text-[35px]'>{title}</span>
          <p className='pr-14 text-xl opacity-50'>{description}</p>
        </div>
      </div>
      <div className='absolute -bottom-[10px] -right-[10px]'>
        <button className={cl(styles.postDetailsButton, 'group')}>
          <ArrowRight className='text-light transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-125' />
        </button>
      </div>
    </div>
  );
};

export { Post };
