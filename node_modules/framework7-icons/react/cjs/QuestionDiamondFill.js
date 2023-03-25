"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function QuestionDiamondFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 22.9960 51.7539 C 25.9726 54.7305 30.1210 54.6836 33.0975 51.7071 L 51.7071 33.0976 C 54.6835 30.1211 54.7306 25.9492 51.7771 22.9961 L 33.0038 4.2227 C 30.0272 1.2695 25.8788 1.3398 22.9023 4.3164 L 4.3163 22.9024 C 1.3397 25.8789 1.2694 30.0273 4.2460 33.0039 Z M 27.2850 34.2930 C 26.0194 34.2930 25.3163 33.6367 25.3163 32.3711 L 25.3163 32.0430 C 25.3163 29.6289 26.6288 28.3164 28.4101 27.0976 C 30.5663 25.6211 31.5975 24.7773 31.5975 23.0898 C 31.5975 21.2383 30.1444 19.9727 27.8944 19.9727 C 26.2538 19.9727 25.0116 20.7930 24.2616 22.1289 C 23.4647 23.0664 23.2538 23.7930 21.8475 23.7930 C 21.0272 23.7930 20.1601 23.2071 20.1601 22.1055 C 20.1601 21.6836 20.2304 21.2851 20.3710 20.8867 C 20.9804 18.6133 23.8163 16.6211 28.0585 16.6211 C 32.2304 16.6211 35.8632 18.8242 35.8632 22.9024 C 35.8632 25.8555 34.1523 27.2617 31.7850 28.8789 C 30.0975 30.0273 29.2538 30.8711 29.2538 32.2539 L 29.2538 32.5586 C 29.2538 33.5195 28.5272 34.2930 27.2850 34.2930 Z M 27.3788 41.3477 C 26.0194 41.3477 24.7538 40.2695 24.7538 38.8164 C 24.7538 37.3633 25.9960 36.2851 27.3788 36.2851 C 28.7382 36.2851 30.0038 37.3398 30.0038 38.8164 C 30.0038 40.2930 28.7147 41.3477 27.3788 41.3477 Z"
  }));
}

var _default = QuestionDiamondFill;
exports["default"] = _default;