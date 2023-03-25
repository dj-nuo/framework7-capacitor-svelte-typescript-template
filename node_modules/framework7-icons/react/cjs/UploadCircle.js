"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function UploadCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 Z M24,4 C12.954305,4 4,12.954305 4,24 C4,35.045695 12.954305,44 24,44 C35.045695,44 44,35.045695 44,24 C44,12.954305 35.045695,4 24,4 Z M25.6033958,9.42926462 C26.059892,9.41628677 26.520536,9.58556071 26.8699172,9.93494193 L32.9237307,15.9887554 C33.5957641,16.6607888 33.5967518,17.7472022 32.9272816,18.4166724 C32.2531439,19.0908101 31.1707959,19.0845528 30.4993646,18.4131215 L27.355853,15.26961 L27.355853,28.2859983 C27.355853,32.5464807 23.9020496,36.000284 19.6415673,36.000284 C15.3810849,36.000284 11.9272816,32.5464807 11.9272816,28.2859983 C11.9272816,24.025516 15.3810849,20.5717126 19.6415673,20.5717126 C20.5883411,20.5717126 21.355853,21.3392245 21.355853,22.2859983 C21.355853,23.2327722 20.5883411,24.000284 19.6415673,24.000284 C17.2746326,24.000284 15.355853,25.9190637 15.355853,28.2859983 C15.355853,30.652933 17.2746326,32.5717126 19.6415673,32.5717126 C22.0085019,32.5717126 23.9272816,30.652933 23.9272816,28.2859983 L23.9272816,15.2700638 L20.7842238,18.4131215 C20.1121904,19.0851549 19.0257771,19.0861426 18.3563068,18.4166724 C17.6821692,17.7425348 17.6884264,16.6601867 18.3598577,15.9887554 L24.4136712,9.93494193 C24.6824493,9.66616386 25.0175108,9.50472491 25.3656719,9.45058749 C25.4432251,9.43822739 25.5225837,9.43099889 25.6033958,9.42926462 Z",
    transform: "translate(4 4)"
  }));
}

var _default = UploadCircle;
exports["default"] = _default;