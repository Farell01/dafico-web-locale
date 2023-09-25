/** @type {import('next').NextConfig} */
const nextConfig = {}


const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.js' 
  );
   
module.exports = withNextIntl({ 
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'dafico.co.id' }],
      destination: 'https://www.dafico.co.id/:path*',
      permanent: true
    }
  ]
 });