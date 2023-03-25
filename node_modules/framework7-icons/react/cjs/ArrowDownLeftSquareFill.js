"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowDownLeftSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 20.4882 21.5664 C 21.6366 21.5664 22.3866 22.3398 22.3866 23.5586 L 22.3866 28.0352 L 22.0117 32.0664 L 25.7382 28.0820 L 35.2539 18.5664 C 35.6288 18.1914 36.0742 17.9805 36.7304 17.9805 C 37.8554 17.9805 38.6054 18.7305 38.6054 19.9023 C 38.6054 20.4180 38.3710 20.9102 37.9960 21.2852 L 28.4804 30.8008 L 24.4492 34.5508 L 28.2695 34.1289 L 32.9804 34.1289 C 34.1992 34.1289 34.9960 34.9023 34.9960 36.0274 C 34.9960 37.1992 34.2226 37.9258 33.0273 37.9258 L 20.7695 37.9258 C 19.4335 37.9258 18.6132 37.3164 18.6132 35.7930 L 18.6132 23.6289 C 18.6132 22.4102 19.3632 21.5664 20.4882 21.5664 Z"
  }));
}

var _default = ArrowDownLeftSquareFill;
exports["default"] = _default;