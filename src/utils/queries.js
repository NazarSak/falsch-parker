const buildGetPostsQuery = (tag = '', offset = 0, limit = 6) => {
  const tagFilter = tag ? ` && tag == "${tag}"` : '';
  const limitFilter = `[${offset}...${offset + limit}]`;
  return `{
    "items": *[_type == "post"${tagFilter}]{_id, tag, title, description, cover, time}${limitFilter},
    "total": count(*[_type == "post"${tagFilter}])
    }`;
};

const buildGetTagsQuery = () => {
  return 'array::unique(*[_type == "post"].tag)';
};

export { buildGetPostsQuery, buildGetTagsQuery };
