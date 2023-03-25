"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MoneyYenCircleFill(props) {
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
    d: "M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M33.8311942,12.8571429 L29.9665179,12.8571429 L24.2569754,23.0675223 L24.1615513,23.0675223 L18.4520089,12.8571429 L14.5714286,12.8571429 L21.5373884,24.6738281 L17.0365513,24.6738281 L17.0365513,26.4709821 L22.4598214,26.4709821 L22.4598214,28.999721 L17.0365513,28.999721 L17.0365513,30.796875 L22.4598214,30.796875 L22.4598214,35.3613281 L25.9268973,35.3613281 L25.9268973,30.796875 L31.3501674,30.796875 L31.3501674,28.999721 L25.9268973,28.999721 L25.9268973,26.4709821 L31.3501674,26.4709821 L31.3501674,24.6738281 L26.8493304,24.6738281 L33.8311942,12.8571429 Z",
    transform: "translate(4 4)"
  }));
}

var _default = MoneyYenCircleFill;
exports["default"] = _default;