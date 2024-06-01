module.exports = {
  async rewrites() {
    return [
      {
        // v2/screenshot으로 요청이 오면 v2/screenshot으로 리디렉션
        source: "/v2/screenshot/:path*",
        destination: "/v2/screenshot",
      },
      {
        source: "/v2/test/:path*",
        destination: "/v2/test",
      },
    ];
  },

  compiler: {
    styledComponents: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "winto-thumbnail-v2.sgp1.digitaloceanspaces.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "winto-thumbnail-v2.sgp1.cdn.digitaloceanspaces.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "leagueofitems.com",
        pathname: "**",
      },
    ], // 여기에 이미지 호스트 도메인 추가
  },
};
