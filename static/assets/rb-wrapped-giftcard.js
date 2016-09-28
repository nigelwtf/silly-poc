
!(function (window) {
  var input = document.querySelector('.gift-card-input');

  window.addEventListener("message", receiveMessage, false);

  function receiveMessage(event) {
    var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
    if (origin !== "http://192.81.219.169:9091") return;

    route(event.data);
  }

  function route(event) {
    if (event.eventType === 'connect') {
      console.log('child has connection');
    }

    if (event.eventType === 'applyPromoCode') {
      console.log('has promo code', event.payload);
      input.value = event.payload;
    }
  }

  window.addEventListener("message", receiveMessage, false);

  window.document.querySelector('iframe').onload = function () {
    window.document.querySelector('iframe').contentWindow.postMessage('register', 'http://192.81.219.169:9091')
  }
})(window);
