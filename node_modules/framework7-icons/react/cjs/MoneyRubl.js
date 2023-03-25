"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MoneyRubl(props) {
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
    d: "M9,4 L9,16 L13.598,16 C17.866,16 20,13.6641221 20,9.97709924 C20,6.3129771 17.866,4 13.62,4 L9,4 Z M14.9168854,20.1355932 L9.14260717,20.1355932 L9.14260717,24.519774 L17.9133858,24.519774 L17.9133858,27.0734463 L9.14260717,27.0734463 L9.14260717,32 L4.3088364,32 L4.3088364,27.0734463 L0,27.0734463 L0,24.519774 L4.3088364,24.519774 L4.3088364,20.1355932 L0,20.1355932 L0,17.559322 L4.3088364,17.559322 L4.3088364,0 L15.0699913,0 C21.0848644,0 25,4.29378531 25,10.1016949 C25,15.8870056 20.9973753,20.1355932 14.9168854,20.1355932 Z",
    transform: "translate(15 12)"
  }));
}

var _default = MoneyRubl;
exports["default"] = _default;