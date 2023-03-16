import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
const users = require("./users.json");

const app = new Koa();

app.use(bodyParser());

app.use(async ctx => {
    ctx.body = 'hello'
  if (ctx.method === 'POST' && ctx.path === '/api/contact') {
    const newUser = ctx.request.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    ctx.body = newUser;
    // Do something with the data
    ctx.body = 'Thank you for your message!';
  } else {
    ctx.body = 'Invalid request';
  }
});


export default app.callback();
