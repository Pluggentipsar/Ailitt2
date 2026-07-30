const { withContentlayer } = require("next-contentlayer2");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.midjourney.com",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // pptxgenjs (PowerPoint-exporten) har både en Node- och en
      // webbläsarväg, och importerar node:fs / node:https för den förra.
      // Paketet deklarerar `browser: { "node:fs": false }`, men webpack
      // skickar requests med URI-schema till en egen upplösare FÖRE både
      // browser-fältet och resolve.alias — därav UnhandledSchemeError.
      //
      // Därför måste prefixet bort redan i beforeResolve. Sedan tar
      // resolve.fallback nedan hand om de avskalade namnen. Webbläsarvägen
      // i pptxgenjs rör aldrig modulerna, de behöver bara sluta krascha
      // bundlingen.
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
          resource.request = resource.request.replace(/^node:/, "");
        })
      );
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        https: false,
        os: false,
        path: false,
      };
    }
    return config;
  },
};

module.exports = withContentlayer(nextConfig);
