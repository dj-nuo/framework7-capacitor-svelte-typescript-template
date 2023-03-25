"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUturnUpSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8399 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1601 8.9101 49.5742 13.7851 49.5742 Z M 25.1523 40.6914 C 19.2226 40.6914 15.5429 36.4023 15.5429 30.6367 L 15.5429 27.2383 C 15.5429 26.1601 16.1523 25.3399 17.2773 25.3399 C 18.4023 25.3399 19.0351 26.1601 19.0351 27.1914 L 19.0351 30.6367 C 19.0351 34.3867 21.4492 37.0820 25.3398 37.0820 C 29.1366 37.0820 31.2226 34.3164 31.2226 30.6601 L 31.2226 23.2539 L 31.3398 20.3242 L 30.2851 21.7773 L 27.2851 24.8945 C 26.9570 25.2461 26.4648 25.4101 26.0195 25.4101 C 25.0117 25.4101 24.2382 24.6601 24.2382 23.6992 C 24.2382 23.1836 24.4023 22.7617 24.7539 22.4336 L 31.4804 15.8477 C 31.8788 15.4492 32.3944 15.1914 32.9570 15.1914 C 33.5429 15.1914 34.0585 15.4492 34.4570 15.8477 L 41.1132 22.4101 C 41.4648 22.7617 41.6523 23.1601 41.6523 23.6523 C 41.6523 24.6601 40.8788 25.4101 39.8944 25.4101 C 39.3554 25.4101 38.9335 25.1758 38.6054 24.8711 L 36.0976 22.2930 L 34.5742 20.3242 L 34.6444 23.2539 L 34.6444 30.6601 C 34.6444 36.4258 31.0820 40.6914 25.1523 40.6914 Z"
  }));
}

var _default = ArrowUturnUpSquareFill;
exports["default"] = _default;