"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUpRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 44.0195 36.2149 L 44.0195 14.2070 C 44.0195 12.8711 43.1758 11.9805 41.7929 11.9805 L 19.7851 12.0273 C 18.4961 12.0273 17.6289 12.9883 17.6289 14.0898 C 17.6289 15.1914 18.6133 16.1289 19.6914 16.1289 L 26.6758 16.1289 L 37.8320 15.7070 L 33.5664 19.4570 L 12.6367 40.4336 C 12.2149 40.8555 11.9805 41.3711 11.9805 41.8633 C 11.9805 42.9648 12.9649 44.0195 14.1133 44.0195 C 14.6524 44.0195 15.1445 43.8086 15.5664 43.3867 L 36.5429 22.4102 L 40.2929 18.1680 L 39.8711 28.8320 L 39.8711 36.3086 C 39.8711 37.3867 40.8086 38.3711 41.9336 38.3711 C 43.0351 38.3711 44.0195 37.4570 44.0195 36.2149 Z"
  }));
}

var _default = ArrowUpRight;
exports["default"] = _default;