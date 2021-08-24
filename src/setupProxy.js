const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/demo', createProxyMiddleware({
    target: 'https://erah07zkak.execute-api.eu-central-1.amazonaws.com',
    changeOrigin: true
  }));
};
