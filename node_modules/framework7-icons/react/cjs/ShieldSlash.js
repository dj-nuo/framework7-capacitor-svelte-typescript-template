"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ShieldSlash(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 48.6133 50.9805 C 49.3165 51.6836 50.4882 51.6836 51.1678 50.9805 C 51.8710 50.2774 51.8710 49.1289 51.1678 48.4258 L 7.4102 4.6914 C 6.7071 3.9883 5.5586 3.9883 4.8321 4.6914 C 4.1290 5.3711 4.1524 6.5430 4.8321 7.2461 Z M 48.7069 14.4883 C 48.7069 12.0274 47.6288 11.2539 45.6602 10.4102 C 42.8946 9.2617 33.9415 6.0742 31.1758 5.0899 C 30.5664 4.8789 29.8868 4.7383 29.2305 4.7383 C 28.5742 4.7383 27.8946 4.9258 27.2618 5.0899 C 25.1055 5.7695 19.8789 7.6680 15.9180 9.1914 L 18.8242 12.1211 C 22.0352 10.9258 25.9727 9.5195 28.2930 8.6992 C 28.6680 8.5586 28.9727 8.4883 29.2305 8.4883 C 29.4883 8.4883 29.7930 8.5586 30.1680 8.6992 C 33.7540 9.9883 40.5508 12.5899 44.1837 13.8321 C 44.8399 14.0664 44.9805 14.3945 44.9805 15.1914 L 44.9805 31.5508 C 44.9805 33.8242 44.6055 35.5821 43.7852 37.1055 L 46.6680 40.0117 C 48.0978 37.8789 48.7069 35.5352 48.7069 32.4180 Z M 9.7540 32.4180 C 9.7540 40.9727 14.3477 44.1133 27.4727 51.4961 C 28.1524 51.8711 28.8086 52.0117 29.2305 52.0117 C 29.6524 52.0117 30.2852 51.8711 30.9883 51.4961 C 34.5508 49.4570 37.4805 47.7461 39.8477 46.1758 L 37.0118 43.3398 C 35.3008 44.4414 33.2618 45.6602 30.8711 47.1367 C 30.0508 47.6289 29.6289 47.7461 29.2305 47.7461 C 28.7852 47.7461 28.3633 47.6055 27.5899 47.1367 C 16.9493 40.6914 13.4805 38.7695 13.4805 31.5508 L 13.4805 19.8086 L 9.7540 16.1055 Z"
  }));
}

var _default = ShieldSlash;
exports["default"] = _default;