
module.exports = app => {
  app.get('/', 'home.index');
  app.get('/app(/.+)?', 'app.index');
  app.get('/spa(/.+)?', 'spa.index');
};
