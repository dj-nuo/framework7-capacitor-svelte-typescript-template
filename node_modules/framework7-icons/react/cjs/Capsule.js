"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Capsule(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 0 29.1449 C 0 41.5941 8.6930 49.9436 21.9149 49.9436 L 34.0636 49.9436 C 47.2857 49.9436 56 41.5941 56 29.1449 C 56 16.6957 47.2857 8.3461 34.0636 8.3461 L 21.9149 8.3461 C 8.6930 8.3461 0 16.6957 0 29.1449 Z M 3.4557 29.1449 C 3.4557 18.7777 10.5174 11.8448 21.2710 11.8448 L 34.7075 11.8448 C 45.4609 11.8448 52.5229 18.7777 52.5229 29.1449 C 52.5229 39.4906 45.4609 46.4450 34.7075 46.4450 L 21.2710 46.4450 C 10.5174 46.4450 3.4557 39.4906 3.4557 29.1449 Z"
  }));
}

var _default = Capsule;
exports["default"] = _default;