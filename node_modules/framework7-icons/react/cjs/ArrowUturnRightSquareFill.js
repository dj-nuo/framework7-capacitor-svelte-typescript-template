"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUturnRightSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8399 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1601 8.9101 49.5742 13.7851 49.5742 Z M 16.6210 30.8477 C 16.6210 24.9179 20.9101 21.3555 26.6757 21.3555 L 34.0585 21.3555 L 36.9882 21.4492 L 35.0429 19.9023 L 32.4648 17.3945 C 32.1366 17.0898 31.9023 16.6445 31.9023 16.1289 C 31.9023 15.1211 32.6757 14.3711 33.6601 14.3711 C 34.1757 14.3711 34.5507 14.5352 34.9023 14.9101 L 41.4882 21.5430 C 41.8632 21.9648 42.1444 22.4570 42.1444 23.0430 C 42.1444 23.6289 41.8632 24.1211 41.4882 24.5195 L 34.8788 31.2461 C 34.5507 31.6211 34.1523 31.7852 33.6132 31.7852 C 32.6757 31.7852 31.9023 31.0117 31.9023 29.9804 C 31.9023 29.5352 32.0663 29.0430 32.4413 28.7148 L 35.5585 25.7383 L 36.9882 24.6836 L 34.0585 24.7773 L 26.6757 24.7773 C 23.0195 24.7773 20.2304 26.8633 20.2304 30.6601 C 20.2304 34.5742 22.9492 36.9648 26.6992 36.9648 L 30.1210 36.9648 C 31.1523 36.9648 31.9726 37.5977 31.9726 38.7461 C 31.9726 39.8477 31.1523 40.4805 30.0742 40.4805 L 26.6992 40.4805 C 20.9335 40.4805 16.6210 36.7773 16.6210 30.8477 Z"
  }));
}

var _default = ArrowUturnRightSquareFill;
exports["default"] = _default;