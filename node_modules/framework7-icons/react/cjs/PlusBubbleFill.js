"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PlusBubbleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 16.0938 52.3164 C 17.0313 52.3164 17.6876 51.8476 18.7891 50.8164 L 27.2735 43.0820 L 43.0938 43.1055 C 50.0783 43.1289 53.8280 39.2383 53.8280 32.3711 L 53.8280 14.4180 C 53.8280 7.5508 50.0783 3.6836 43.0938 3.6836 L 12.9064 3.6836 C 5.9454 3.6836 2.1720 7.5273 2.1720 14.4180 L 2.1720 32.3711 C 2.1720 39.2617 5.9454 43.1055 12.9064 43.0820 L 14.0079 43.0820 L 14.0079 49.9024 C 14.0079 51.3555 14.7813 52.3164 16.0938 52.3164 Z M 28.1407 34.9961 C 26.8282 34.9961 26.1016 34.0351 26.1016 32.6758 L 26.1016 25.8789 L 19.0001 25.8789 C 17.6173 25.8789 16.6564 25.1524 16.6564 23.8633 C 16.6564 22.5039 17.5704 21.7773 19.0001 21.7773 L 26.1016 21.7773 L 26.1016 14.4883 C 26.1016 13.1289 26.8282 12.1680 28.1407 12.1680 C 29.4532 12.1680 30.2266 13.0820 30.2266 14.4883 L 30.2266 21.7773 L 37.3751 21.7773 C 38.8048 21.7773 39.6954 22.5039 39.6954 23.8633 C 39.6954 25.1524 38.7579 25.8789 37.3751 25.8789 L 30.2266 25.8789 L 30.2266 32.6758 C 30.2266 34.0820 29.4532 34.9961 28.1407 34.9961 Z"
  }));
}

var _default = PlusBubbleFill;
exports["default"] = _default;