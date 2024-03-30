import React from 'react';
import { tags } from '@/app/[lang]/blog/tags';
import { Chip } from '@/app/[lang]/blog/components/chip';

const TagList = () => {
  return (
    <div className='flex gap-2'>
      {tags.map((tag) => (
        <Chip text={tag} active={tag === 'All'} />
      ))}
    </div>
  );
};

export { TagList };
