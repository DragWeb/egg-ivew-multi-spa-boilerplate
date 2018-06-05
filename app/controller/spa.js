const Model = require('../mocks/article/list');
const Controller = require('egg').Controller;
class SpaController extends Controller {
  async index() {
    await this.ctx.render('spa/app.js', {
      url: this.ctx.url.replace(/\/spa/, '')
    });
  }
}

module.exports = SpaController;