const Model = require('../mocks/article/list');
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    await this.ctx.render('home/home.js');
  }
}

module.exports = HomeController;