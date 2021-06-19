module.exports = {
  reactStrictMode: true,
  rewrites() {
    return [{
      source: '/action/:path*',
      destination: '/api/action/:path*'
    }]
  }
}
