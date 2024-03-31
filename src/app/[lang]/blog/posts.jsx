import React from 'react';
import { PostList, TagList } from './components';

const Posts = ({ activeTag, posts, tags }) => {
  return (
    <section>
      <TagList tags={tags} activeTag={activeTag} />
      <PostList posts={posts} />
    </section>
  );
};

export { Posts };
