'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async testGet() {
    const { ctx } = this;
    console.log(ctx.response);
    ctx.body = {
      name: ctx.query.name,
    };
    // await ctx.render('index.html');
  }
  async testPost() {
    const { ctx } = this;
    console.log(ctx.request);
    ctx.body = {
      name: ctx.request.body.name,
      age: ctx.request.body.age,
    };
  }
}

module.exports = HomeController;
