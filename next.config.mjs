/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  async redirects() {
    return [
      {
        source: "/location",
        destination: "https://maps.app.goo.gl/b6HT7gV9UVTc3RFq9",
        permanent: true,
      },
    ];
  },
};

export default withPlaiceholder(nextConfig);
