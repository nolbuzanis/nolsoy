const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    proxy(['/auth/google', '/api'], {
      target: 'http://localhost:8000'
    })
  );
};
