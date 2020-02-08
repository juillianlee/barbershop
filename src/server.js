const Koa = require('koa');
const Router = require('koa-router');
const graphql = require('./graphql');

// cria uma instancia do koa
const app = new Koa();

// cria uma instancia do Router
const router = new Router();

// rota de exemplo com retorno no body
router.get('/', (ctx) => {
  ctx.body = 'Hello Barbershop';
});

// registra no koa o router
app.use(router.routes());
app.use(router.allowedMethods());

// registra o apollo-server
app.use(graphql.getMiddleware());

module.exports = app;
