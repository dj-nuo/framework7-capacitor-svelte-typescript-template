"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ChartBarCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 Z M24,4 C12.954305,4 4,12.954305 4,24 C4,35.045695 12.954305,44 24,44 C35.045695,44 44,35.045695 44,24 C44,12.954305 35.045695,4 24,4 Z M16,18 C17.1045695,18 18,18.8954305 18,20 L18,34 C18,35.1045695 17.1045695,36 16,36 L14,36 C12.8954305,36 12,35.1045695 12,34 L12,20 C12,18.8954305 12.8954305,18 14,18 L16,18 Z M25,12 C26.1045695,12 27,12.8954305 27,14 L27,34 C27,35.1045695 26.1045695,36 25,36 L23,36 C21.8954305,36 21,35.1045695 21,34 L21,14 C21,12.8954305 21.8954305,12 23,12 L25,12 Z M34,24 C35.1045695,24 36,24.8954305 36,26 L36,34 C36,35.1045695 35.1045695,36 34,36 L32,36 C30.8954305,36 30,35.1045695 30,34 L30,26 C30,24.8954305 30.8954305,24 32,24 L34,24 Z",
    transform: "translate(4 4)"
  }));
}

var _default = ChartBarCircle;
exports["default"] = _default;