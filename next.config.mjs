/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["sr", "en"],
    defaultLocale: "sr",
    localeDetection: false,
  },
  images: {
    domains: ["localhost"],
  },
};

export default nextConfig;
