const express = require('express');

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

    <small>This input should be populated 5 seconds after iframe load</small>

    <hr />

    <iframe src="http://192.81.219.169:9091" frameborder="0"></iframe>

    <script src="/assets/rb-wrapped-giftcard.js"></script>
  </body>
</html>
`;

module.exports = function () {
  const app = express();

  app.get('/', function (req, res) {
    res.send(template_index);
  });

  app.use(express.static('static'))

  app.listen(80);
};
