const send = require('koa-send');
const koa = require('koa');
const template_index = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Meow</title>

<style>
iframe {
  display: block;
}
</style>
</head>
<body>
<input class="gift-card-input" />

<h1>cool</h1>
<iframe src="http://192.81.219.169:9091" frameborder="0"></iframe>

<span>meow</span>
<span>meow2</span>

<script src="/assets/rb-wrapped-giftcard.js"></script>
</body>
</html>
`;

module.exports = function () {
  const app = koa();

  app.use(function *(){
    if ('/' == this.path) return this.body = template_index;
    yield send(this, this.path, { root: __dirname + '/static' });
  });

  app.listen(80);
};
