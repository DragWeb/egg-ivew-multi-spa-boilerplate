const Model = require('../mocks/article/list');
const Controller = require('egg').Controller;
class AppController extends Controller {
  async index() {
    await this.ctx.render('app/app.js', {
      url: this.ctx.url.replace(/\/app/, '')
    });
  }
}

module.exports = AppController;