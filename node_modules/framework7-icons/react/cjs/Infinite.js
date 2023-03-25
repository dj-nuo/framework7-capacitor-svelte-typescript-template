"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Infinite(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M26,6.85139842 C28.7838328,2.77272553 34.0445029,0 39,0 C46.1797017,0 52,5.82029825 52,13 C52,20.1797017 46.1797017,26 39,26 C34.0445029,26 28.7838328,23.2272745 26,19.1486016 C23.2161672,23.2272745 17.9554971,26 13,26 C5.82029825,26 0,20.1797017 0,13 C0,5.82029825 5.82029825,0 13,0 C17.9554971,0 23.2161672,2.77272553 26,6.85139842 L26,6.85139842 Z M13,20 C17.4753345,20 22,16.2684294 22,13 C22,9.7315706 17.4753345,6 13,6 C9.13400675,6 6,9.13400675 6,13 C6,16.8659932 9.13400675,20 13,20 Z M39,20 C42.8659932,20 46,16.8659932 46,13 C46,9.13400675 42.8659932,6 39,6 C34.5246655,6 30,9.7315706 30,13 C30,16.2684294 34.5246655,20 39,20 Z",
    transform: "translate(2 14)"
  }));
}

var _default = Infinite;
exports["default"] = _default;