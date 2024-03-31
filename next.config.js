module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/screenshot",
        has: [
          {
            type: "host",
            value: "(?!^$)",
          },
        ],
      },
    ];
  },

  compiler: {
    styledComponents: true,
  },

  images: {
    domains: [
      "ddragon.leagueoflegends.com",
      "https://winto-thumbnail.sgp1.digitaloceanspaces.com",
    ], // 여기에 이미지 호스트 도메인 추가
  },

  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};
