import React from 'react';
import { Chip } from '@/app/[lang]/blog/components/chip';
import { buildBlogPagingHref } from '@/utils/utils';

const TagList = ({ tags, activeTag }) => {
  return (
    <div className='flex gap-2'>
      <Chip
        key='all'
        text='All'
        active={!activeTag}
        href={buildBlogPagingHref(1)}
      />
      {tags.map((tag) => (
        <Chip
          key={tag}
          text={tag}
          active={tag === activeTag}
          href={buildBlogPagingHref(1, tag)}
        />
      ))}
    </div>
  );
};

export { TagList };
