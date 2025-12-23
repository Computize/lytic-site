const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

module.exports = withMDX(nextConfig);

//this is a redirect from aboutUs to aboutus, recommended by AI
module.exports = {
  async redirects() {
    return [
      {
        source: '/aboutUs',
        destination: '/aboutus',
        permanent: true,
      },
    ]
  },
}
// module.exports = {
//   theme: {
//     // ...
//   },
//   plugins: [
//     require('@tailwindcss/typography'),
//     // ...
//   ],
// };
