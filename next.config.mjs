import createNextra from 'nextra'

const withNextra = createNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // webpack 配置
  webpack(config) {
    // 处理 components/icons 目录下的 svg
    const allowedSvgRegex = /components\/icons\/.+\.svg$/
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))
    fileLoaderRule.exclude = allowedSvgRegex
    config.module.rules.push({
      test: allowedSvgRegex,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

export default withNextra(nextConfig)
