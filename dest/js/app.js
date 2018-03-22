"use strict";var _utils = require("./utils");
var _jquery = require("./jquery");var _jquery2 = _interopRequireDefault(_jquery);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

Dog = function (_Animal) {_inherits(Dog, _Animal);
  function Dog() {_classCallCheck(this, Dog);var _this = _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this));

    console.log("==constructor dog");return _this;
  }return Dog;}(_utils.Animal);


document.getElementById("demo").innerHTML = new Dog().sayHello();
(0, _jquery2.default)("#demo_2").html(_utils.GztUtils.add(10, 5));
document.getElementById("demo_3").innerHTML = new _utils.Circle().sayCircleArea(1);