"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Barcode(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 5.2423 46.0000 L 9.0626 46.0000 L 9.0626 10.0000 L 5.2423 10.0000 Z M 12.7657 46.0000 L 14.9688 46.0000 L 14.9688 10.0000 L 12.7657 10.0000 Z M 18.6016 46.0000 L 24.8360 46.0000 L 24.8360 10.0000 L 18.6016 10.0000 Z M 27.1329 46.0000 L 31.0938 46.0000 L 31.0938 10.0000 L 27.1329 10.0000 Z M 33.4610 46.0000 L 39.6485 46.0000 L 39.6485 10.0000 L 33.4610 10.0000 Z M 41.5469 46.0000 L 46.3985 46.0000 L 46.3985 10.0000 L 41.5469 10.0000 Z M 47.6171 46.0000 L 50.7577 46.0000 L 50.7577 10.0000 L 47.6171 10.0000 Z"
  }));
}

var _default = Barcode;
exports["default"] = _default;