import { defineField, defineType } from '@sanity/types';

export const Post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tag',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      time: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cover',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'time',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
  ],
});
