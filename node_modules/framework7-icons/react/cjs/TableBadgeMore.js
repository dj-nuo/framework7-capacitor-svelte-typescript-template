"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TableBadgeMore(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 21.5338 46.4578 L 49.6748 46.4578 C 53.9051 46.4578 56.0000 44.3628 56.0000 40.2132 L 56.0000 15.6175 C 56.0000 11.4679 53.9051 9.3729 49.6748 9.3729 L 14.8058 9.3729 C 10.6158 9.3729 8.5007 11.4477 8.5007 15.6175 L 8.5007 27.1197 C 9.6086 26.9988 10.6158 26.9988 11.7439 27.1197 L 11.7439 23.7556 L 30.8201 23.7556 L 30.8201 32.0750 L 20.5064 32.0750 C 21.1712 32.9211 21.7352 33.8880 22.1381 34.9153 L 30.8201 34.9153 L 30.8201 43.2146 L 22.7827 43.2146 C 22.5410 44.3628 22.0978 45.4506 21.5338 46.4578 Z M 11.7439 20.9154 L 11.7439 15.7787 C 11.7439 13.6837 12.8518 12.6161 14.8662 12.6161 L 30.8201 12.6161 L 30.8201 20.9154 Z M 33.6604 20.9154 L 33.6604 12.6161 L 49.6344 12.6161 C 51.6084 12.6161 52.7570 13.6837 52.7570 15.7787 L 52.7570 20.9154 Z M 33.6604 32.0750 L 33.6604 23.7556 L 52.7570 23.7556 L 52.7570 32.0750 Z M 10.2331 50.2448 C 15.8532 50.2448 20.4662 45.6520 20.4662 40.0117 C 20.4662 34.4118 15.8532 29.7787 10.2331 29.7787 C 4.6331 29.7787 0 34.4118 0 40.0117 C 0 45.6520 4.6331 50.2448 10.2331 50.2448 Z M 33.6604 43.2146 L 33.6604 34.9153 L 52.7570 34.9153 L 52.7570 40.0520 C 52.7570 42.1470 51.6084 43.2146 49.6344 43.2146 Z M 4.6331 41.5628 C 3.7871 41.5628 3.1021 40.8377 3.1021 40.0117 C 3.1021 39.1859 3.7871 38.4607 4.6331 38.4607 C 5.4792 38.4607 6.1842 39.1859 6.1842 40.0117 C 6.1842 40.8377 5.4792 41.5628 4.6331 41.5628 Z M 10.2532 41.5628 C 9.4072 41.5628 8.7022 40.8377 8.7022 40.0117 C 8.7022 39.1859 9.4072 38.4607 10.2532 38.4607 C 11.0791 38.4607 11.8043 39.1859 11.8043 40.0117 C 11.8043 40.8377 11.0791 41.5628 10.2532 41.5628 Z M 15.8331 41.5628 C 14.9870 41.5628 14.3022 40.8377 14.3022 40.0117 C 14.3022 39.1859 14.9870 38.4607 15.8331 38.4607 C 16.6791 38.4607 17.3842 39.1859 17.3842 40.0117 C 17.3640 40.8377 16.6791 41.5628 15.8331 41.5628 Z"
  }));
}

var _default = TableBadgeMore;
exports["default"] = _default;