"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DeleteLeftFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 46.0351 49.5742 C 50.9339 49.5742 53.3944 47.1602 53.3944 42.3086 L 53.3944 13.6914 C 53.3944 8.8398 50.9339 6.4258 46.0351 6.4258 L 25.6681 6.4258 C 22.9259 6.4258 20.5587 7.1289 18.6368 9.1680 L 4.8321 23.5118 C 3.3087 25.0820 2.6056 26.4883 2.6056 27.9649 C 2.6056 29.4180 3.2853 30.8477 4.8321 32.4180 L 18.6603 46.6914 C 20.6056 48.7070 22.9494 49.5508 25.6915 49.5508 Z M 40.5743 38.3711 C 40.0118 38.3711 39.5196 38.1602 39.1212 37.7852 L 32.2774 30.8945 L 25.4103 37.7852 C 25.0118 38.1602 24.5196 38.3711 23.9572 38.3711 C 22.8087 38.3711 21.8478 37.4336 21.8478 36.2852 C 21.8478 35.7461 22.0821 35.2305 22.4806 34.8086 L 29.3009 27.9649 L 22.4806 21.1445 C 22.0821 20.7227 21.8478 20.2071 21.8478 19.6680 C 21.8478 18.4961 22.8087 17.5352 23.9572 17.5352 C 24.4962 17.5352 25.0118 17.7461 25.4337 18.1680 L 32.2774 25.0118 L 39.0978 18.1680 C 39.5196 17.7461 40.0353 17.5352 40.5743 17.5352 C 41.7462 17.5352 42.6837 18.4961 42.6837 19.6680 C 42.6837 20.2071 42.4728 20.7227 42.0509 21.1445 L 35.2306 27.9649 L 42.0509 34.8086 C 42.4728 35.2305 42.6837 35.7461 42.6837 36.2852 C 42.6837 37.4336 41.7228 38.3711 40.5743 38.3711 Z"
  }));
}

var _default = DeleteLeftFill;
exports["default"] = _default;