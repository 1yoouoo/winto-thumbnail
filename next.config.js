module.exports = {
  async rewrites() {
    return [
      {
        // v2/screenshot으로 요청이 오면 v2/screenshot으로 리디렉션
        source: "/v2/screenshot/:path*",
        destination: "/v2/screenshot",
      },
      {
        // 기존 경로 설정 유지
        source: "/screenshot/:path*",
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
      "winto-thumbnail.sgp1.digitaloceanspaces.com",
    ], // 여기에 이미지 호스트 도메인 추가
  },
};
