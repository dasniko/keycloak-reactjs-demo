const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/demo', {
    target: 'https://erah07zkak.execute-api.eu-central-1.amazonaws.com',
    changeOrigin: true
  }))
};
