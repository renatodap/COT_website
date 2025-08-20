import { defineDocumentType, makeSource } from 'contentlayer2/source-files';

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `articles/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    titleEN: { type: 'string', required: true },
    date: { type: 'date', required: true },
    excerpt: { type: 'string', required: true },
    excerptEN: { type: 'string', required: true },
    category: {
      type: 'enum',
      options: ['methodology', 'competition', 'physical-mental', 'court-stories'],
      required: true,
    },
    image: { type: 'string' },
    author: { type: 'string', default: 'Carlos Omaki' },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (article) => `/artigos/${article._raw.flattenedPath.replace('articles/', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (article) => article._raw.flattenedPath.replace('articles/', ''),
    },
    readingTime: {
      type: 'number',
      resolve: (article) => {
        const wordsPerMinute = 200;
        const numberOfWords = article.body.raw.split(/\s/g).length;
        const minutes = numberOfWords / wordsPerMinute;
        return Math.ceil(minutes);
      },
    },
  },
}));

export const Policy = defineDocumentType(() => ({
  name: 'Policy',
  filePathPattern: `policies/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    titleEN: { type: 'string', required: true },
    lastUpdated: { type: 'date', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (policy) => policy._raw.flattenedPath.replace('policies/', ''),
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Article, Policy],
});