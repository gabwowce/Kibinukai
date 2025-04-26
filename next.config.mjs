/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // svarbu statiniams hostams (kad veiktų katalogai kaip `/about/`)
};

export default nextConfig;
