import React from 'react';
import { Post } from '.';

const PostList = ({ posts }) => {
  return (
    <div className='mt-10 grid grid-cols-2 gap-5'>
      {posts.map((post) => (
        <Post
          key={post.id}
          imageSrc={post.imageUrl}
          tag={post.tag}
          time={post.time}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export { PostList };
