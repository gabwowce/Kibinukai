import Head from 'next/head';

export const Seo = ({ title, description }: { title: string; description: string; }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="/og-image.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);
