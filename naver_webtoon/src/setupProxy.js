const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://comic.naver.com", // 프록시할 대상 서버의 주소
      changeOrigin: true, // 대상 서버의 Origin을 변경
    })
  );
};
