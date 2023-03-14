const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

// parse request body
app.use(bodyParser());

// handle form submission
router.post('/submit', async (ctx) => {
  const { name, email } = ctx.request.body;
  // save data to database or do other processing
  console.log(name, email);
  ctx.body = { message: 'Data saved' };
});

// register router middleware
app.use(router.routes());

// start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});