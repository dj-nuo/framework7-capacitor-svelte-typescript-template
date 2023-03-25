"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Checkmark2(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2.25,19.289 C3.05929333,19.289 3.60333333,19.5748116 4.14863354,20.2799353 L4.2656,20.4375 L15.1875,34.7343 L16.318,32.932 L19.093,36.466 L17.6484,38.7421 C17.1234,39.5514867 16.3942116,39.9933516 15.479941,40.0486696 L15.2812,40.0546 C14.3405867,40.0546 13.6654009,39.6666942 12.9888039,38.8718576 L12.8437,38.6953 L0.6797,23.2031 C0.2344,22.6406 0,22.0312 0,21.4922 C0,20.2031 0.9375,19.289 2.25,19.289 Z M49.25,0 C50.539,0 51.4062,0.8437 51.4062,2.1327 C51.4062,2.6119 51.2580519,3.07261111 50.9288162,3.64638011 L50.7968,3.8671 L28.6484,38.7421 C28.0859,39.6093 27.289,40.0546 26.2812,40.0546 C25.3405867,40.0546 24.6654009,39.6666942 23.9888039,38.8718576 L23.8437,38.6953 L11.6797,23.2031 C11.2344,22.6406 11,22.0312 11,21.4922 C11,20.2031 11.9375,19.289 13.25,19.289 C14.0592933,19.289 14.6033333,19.5748116 15.1486335,20.2799353 L15.2656,20.4375 L26.1875,34.7343 L47.2344,1.1953 C47.7968,0.3046 48.3359,0 49.25,0 Z M38.25,0 C39.539,0 40.4062,0.8437 40.4062,2.1327 C40.4062,2.6119 40.2580519,3.07261111 39.9288162,3.64638011 L39.7968,3.8671 L25.184,26.876 L22.403,23.235 L36.2344,1.1953 C36.7593067,0.36398 37.2639164,0.0432182222 38.072062,0.00414474074 L38.25,0 Z",
    transform: "translate(2.25 8)"
  }));
}

var _default = Checkmark2;
exports["default"] = _default;