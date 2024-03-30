import React from 'react';
import { Container } from '@/components/container/container';
import { Heading } from './heading';
import { Posts } from './posts';
import { Paging } from './components';

const BlogPage = () => {
  return (
    <Container>
      <div className='my-20 flex flex-col gap-20'>
        <Heading />
        <Posts />
        <Paging page={1} lastPage={4} />
      </div>
    </Container>
  );
};

export default BlogPage;
