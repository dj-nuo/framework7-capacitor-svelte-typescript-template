"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CloudBolt(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 12.3433 35.3059 L 41.2638 35.3059 C 48.9076 35.3059 54.5938 29.5031 54.5938 22.3021 C 54.5938 14.8914 48.5349 9.4615 40.6345 9.4615 C 37.7215 3.7054 32.3150 0 25.5800 0 C 16.8177 0 9.5933 6.8514 8.8243 15.5206 C 4.6062 16.7324 1.3903 20.4145 1.3903 25.3317 C 1.3903 30.8315 5.3986 35.3059 12.3433 35.3059 Z M 12.2966 31.5539 C 7.5193 31.5539 5.1189 28.8972 5.1189 25.4482 C 5.1189 22.6284 6.7502 20.1115 10.7120 19.0628 C 11.9937 18.7366 12.4598 18.1307 12.5763 16.8023 C 13.1123 9.2052 18.8218 3.7287 25.5800 3.7287 C 30.8235 3.7287 34.9483 6.5951 37.4652 11.7686 C 38.0012 12.8872 38.7003 13.2834 40.0752 13.2834 C 46.9733 13.2834 50.8649 17.4549 50.8649 22.4187 C 50.8649 27.4990 46.8100 31.5539 41.4968 31.5539 Z M 33.3636 43.9517 L 28.5630 43.9517 L 30.8701 39.5239 C 31.1498 39.0345 30.9400 38.6384 30.4273 38.6384 L 25.3703 38.6384 C 24.6945 38.6384 24.4614 38.8714 24.2517 39.3608 L 21.0823 46.5851 C 20.8260 47.1677 21.0823 47.5172 21.6882 47.5172 L 25.7431 47.5172 L 22.5505 55.2310 C 22.4339 55.5572 22.4806 55.8136 22.7136 55.9068 C 22.9233 56 23.1797 55.9301 23.4360 55.6737 L 33.7365 45.1169 C 34.2259 44.6042 34.0394 43.9517 33.3636 43.9517 Z"
  }));
}

var _default = CloudBolt;
exports["default"] = _default;