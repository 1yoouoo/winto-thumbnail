module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/screenshot", // 모든 요청을 /page로 리다이렉트
      },
    ];
  },

  compiler: {
    styledComponents: true,
  },

  images: {
    domains: ["ddragon.leagueoflegends.com"], // 여기에 이미지 호스트 도메인 추가
  },
};
