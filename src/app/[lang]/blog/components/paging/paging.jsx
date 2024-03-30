import React from 'react';
import { ArrowRight } from '@/components/icons/arrowRight';
import { PagingButton } from './pagingButton';
import { ArrowLeft } from '@/components/icons/arrowLeft';

const Paging = ({ page, lastPage }) => {
  return (
    <section className='flex justify-center'>
      <div className='flex w-[230px] items-center justify-between'>
        <PagingButton icon={ArrowLeft} direction='left' disabled={page === 1} />
        <div className='flex items-center gap-2'>
          {Array(lastPage)
            .fill(0)
            .map((_, index) => (
              <button className={index + 1 === page ? 'text-lg' : 'opacity-50'}>
                {index + 1}
              </button>
            ))}
        </div>
        <PagingButton
          icon={ArrowRight}
          direction='right'
          disabled={page === lastPage}
        />
      </div>
    </section>
  );
};

export { Paging };
