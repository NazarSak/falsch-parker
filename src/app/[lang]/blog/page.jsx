import React from 'react';
import { Container } from '@/components/container/container';
import { Heading } from './heading';
import { Posts } from './posts';
import { Paging } from './components';
import { client } from '@/sanity/client';
import { Post } from '@/models/post';
import { buildGetPostsQuery, buildGetTagsQuery } from '@/utils/queries';

const limit = +process.env.POSTS_ON_PAGE;

const BlogPage = async ({ searchParams }) => {
  const { page = 1, tag = '' } = searchParams;
  const { posts, total } = await client
    .fetch(buildGetPostsQuery(tag, (+page - 1) * limit, limit))
    .then((response) => ({
      posts: response.items.map((post) => new Post(post)),
      total: response.total,
    }));
  const tags = await client.fetch(buildGetTagsQuery());

  return (
    <Container>
      <div className='my-20 flex flex-col gap-20'>
        <Heading />
        <Posts activeTag={tag} tags={tags} posts={posts} />
        <Paging page={+page} lastPage={Math.ceil(total / limit)} tag={tag} />
      </div>
    </Container>
  );
};

export default BlogPage;

// returns page per each request without caching
// export const dynamic = 'force-dynamic';

// revalidates whole route in N seconds
export const revalidate = 30;
