import React from 'react';
import styles from './style.module.scss';
import { ArrowDownRoundButton } from '@/components/buttons/arrowDownRoundButton';

export const MainOpenAppShape = ({ scrollTo }) => {
  return (
    <div className='absolute bottom-0 left-0 z-[2] h-[215px] w-[550px] rounded-tr-card bg-light'>
      <div className='relative h-full'>
        <div className={styles.mainOpenAppShape__left}></div>
        <div className={styles.mainOpenAppShape__bottom}></div>
        <div className='absolute bottom-0 left-0 flex h-full flex-col  justify-between'>
          <span className='block max-w-[500px] pt-5 text-3xl'>
            One app for park management & illegal parking reports
          </span>
          <ArrowDownRoundButton onClick={scrollTo} />
        </div>
      </div>
    </div>
  );
};
