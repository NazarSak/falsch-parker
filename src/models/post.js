import { urlForImage } from '@/sanity/utils';

class Post {
  constructor(post) {
    this.id = post._id;
    this.title = post.title;
    this.time = post.time;
    this.description = post.description;
    this.tag = post.tag;
    this.imageUrl = urlForImage(post.cover);
  }
}

export { Post };
