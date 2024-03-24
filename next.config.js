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
};
