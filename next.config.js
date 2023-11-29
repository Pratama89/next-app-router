/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'flowbite.com',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'images.tokopedia.net',
              port: '',
              pathname: '/**',
            },
        ]
      },
}

module.exports = nextConfig
