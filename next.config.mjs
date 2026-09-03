/** @type {import('next').NextConfig} */
const nextConfig = {
  /*
   * The dev server is also reached over the LAN address it prints, and
   * Next.js blocks dev-only assets from other origins by default — which
   * silently prevents the client bundle from hydrating.
   */
  allowedDevOrigins: ["127.0.0.1", "127.0.2.2", "0.0.0.0", "*.local"],
};

export default nextConfig;
