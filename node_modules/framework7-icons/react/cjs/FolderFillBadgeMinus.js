"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FolderFillBadgeMinus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 45.5564 30.9095 C 51.2719 30.9095 56 26.2223 56 20.4660 C 56 14.7509 51.2719 10.0226 45.5564 10.0226 C 39.8207 10.0226 35.1131 14.7509 35.1131 20.4660 C 35.1131 26.2223 39.8207 30.9095 45.5564 30.9095 Z M 32.3994 22.1107 C 32.3172 21.5762 32.2760 21.0211 32.2760 20.4660 C 32.2760 18.2047 32.8517 16.0666 33.8796 14.1958 L 20.7636 14.1958 C 19.3656 14.1958 18.5227 13.8463 17.4948 12.9829 L 16.2408 11.9345 C 14.8840 10.8038 13.8355 10.4132 11.8003 10.4132 L 5.6740 10.4132 C 2.0763 10.4132 0 12.4690 0 16.6217 L 0 22.1107 Z M 40.2729 21.7406 C 39.5740 21.7406 38.9985 21.1444 38.9985 20.4660 C 38.9985 19.8082 39.5740 19.2120 40.2729 19.2120 L 50.8399 19.2120 C 51.5182 19.2120 52.0941 19.8082 52.0941 20.4660 C 52.0941 21.1444 51.5182 21.7406 50.8399 21.7406 Z M 0 42.1958 C 0 46.4514 2.1792 48.5688 6.4552 48.5688 L 41.3832 48.5688 C 45.0630 48.5688 47.2014 46.4308 47.2014 42.1958 L 47.2014 33.6232 C 46.6667 33.7054 46.1117 33.7465 45.5564 33.7465 C 39.8207 33.7465 34.8869 30.0461 33.0367 24.9066 L 0 24.9066 Z"
  }));
}

var _default = FolderFillBadgeMinus;
exports["default"] = _default;