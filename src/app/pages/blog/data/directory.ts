export interface BlogMetadata {
  title: string;
  category: string;
  tags: string[];
  publishDate: Date | null;
  lastEditDate: Date | null;
  file: string;
  url: string;
}

export const BLOG_DIRECTORY: BlogMetadata[] = [
  {
    title:
      'Setting up automatic build + publish pipeline for my Angular GitHub Pages website',
    category: 'CI/CD',
    tags: [],
    publishDate: new Date(2024, 6, 7),
    lastEditDate: new Date(2024, 6, 7),
    file: 'setting-up-build-publish-pipeline.md',
    url: 'setting-up-build-publish-pipeline',
  },
];
