/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["sr", "en"],
    defaultLocale: "sr",
    localeDetection: false,
  },
  images: {
    domains: ["lightgreen-emu-646217.hostingersite.com"],
  },
};

export default nextConfig;
