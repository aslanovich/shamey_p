/** @type {import('next').NextConfig} */
const nextConfig = {
  // Статический экспорт: `npm run build` кладёт готовый сайт в out/
  output: "export",
  // next/image в статике не может оптимизировать на лету
  images: { unoptimized: true },
  // /privacy -> /privacy/index.html — чтобы nginx отдавал страницы напрямую
  trailingSlash: true,
};
export default nextConfig;
