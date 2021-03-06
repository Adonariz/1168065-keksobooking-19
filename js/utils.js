'use strict';

(function () {
  // для склонения числительных
  var CASES = [2, 0, 1, 1, 1, 2];

  window.utils = {
    // кнопки ввода мыши и клавиатуры
    MOUSE_LB: 0,
    ENTER_KEY: 'Enter',
    ESC_KEY: 'Escape',

    // склонение числительных
    pluralize: function (number, titles) {
      return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : CASES[(number % 10 < 5) ? number % 10 : 5]];
    },

    // управление инпутами
    setInputAttribute: function (inputs, disable) {
      inputs.forEach(function (input) {
        return disable ? input.setAttribute('disabled', 'true') : input.removeAttribute('disabled');
      });
    }
  };
})();
