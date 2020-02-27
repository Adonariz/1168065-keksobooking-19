'use strict';

(function () {
  var PIN_WIDTH = window.data.PIN_WIDTH;
  var PIN_HEIGHT = window.data.PIN_HEIGHT;

  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  window.pin = {
    render: function (advert) {
      var pin = pinTemplate.cloneNode(true);
      var pinImg = pin.querySelector('img');

      pinImg.src = advert.author.avatar;
      pinImg.alt = advert.offer.title;
      pin.style.left = (advert.location.x - PIN_WIDTH / 2) + 'px';
      pin.style.top = (advert.location.y - PIN_HEIGHT) + 'px';

      return pin;
    }
  };
})();
