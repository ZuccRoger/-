"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToyVue = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToyVue = function ToyVue(config) {
  _classCallCheck(this, ToyVue);

  this.template = document.querySelector(config.el);
  this.data = config.data;
};

exports.ToyVue = ToyVue;
var effects = [];

function effect(fn) {
  effects.push(fn);
  fn();
}

function reactive(object) {
  var observed = new Proxy(object, {
    set: function set(object, property, value) {
      object[property] = value;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = effects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _effect = _step.value;

          _effect();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return value;
    }
  });
  return observed;
}

var dummy;
var counter = reactive({
  num: 0
});
effect(function () {
  dummy = counter.num;
});
console.log(dummy);
counter.num = 7;
console.log(dummy);
var arr = [1, 2, 3, 4, 5, 6];

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var i = _arr[_i];
  console.log(i);
}