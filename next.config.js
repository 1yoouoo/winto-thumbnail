// next.config.js
module.exports = {
  async headers() {
    return [
      {
        // 모든 경로에 대해 적용
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // 모든 도메인에서의 요청을 허용
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type,Authorization",
          },
        ],
      },
    ];
  },
};
