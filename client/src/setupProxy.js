const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    proxy(['/auth/google', '/api', '/auth'], {
      target: 'http://localhost:8000'
    })
  );
};
