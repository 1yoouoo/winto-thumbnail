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
      "wooto-lol-replays.s3.ap-northeast-2.amazonaws.com",
    ], // 여기에 이미지 호스트 도메인 추가
  },
};
