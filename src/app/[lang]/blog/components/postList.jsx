import React from 'react';
import { Post } from '.';

const PostList = () => {
  return (
    <div className='mt-10 grid grid-cols-2 gap-5'>
      {Array(6)
        .fill(0)
        .map((_) => (
          <Post />
        ))}
    </div>
  );
};

export { PostList };
