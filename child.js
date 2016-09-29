const express = require('express');

const template_iframe = `
  <html>
    <head>
      <title>Some iframe</title>
    </head>

    <body>
      <p>Iframe content goes here</p>

      <script>
        var eventSource = null;
        var eventOrigin = null;

        console.log('iframe js has booted');

        function receiveMessage(event) {
          var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
          if (origin !== "http://192.81.219.169") return;

          console.log('iframe has recieved message from parent window');

          eventSource = event.source;
          eventOrigin = event.origin;

          event.source.postMessage({eventType: 'connect'}, event.origin);
        }

        setTimeout(function () {
          eventSource.postMessage({
            eventType: 'applyPromoCode',
            payload: '1234-1234-1234-1234'
          }, eventOrigin)
        }, 5000)

        window.addEventListener("message", receiveMessage, false);
      </script>
    </body>
  </html>
`;



module.exports = function () {
  var app = express();

  app.get('/',  function (req, res) {
    res.send(template_iframe);
  });

  app.listen(9091);
}
