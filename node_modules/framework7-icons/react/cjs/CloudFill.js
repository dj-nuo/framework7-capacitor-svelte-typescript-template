"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CloudFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 12.2618 45.5195 L 41.3477 45.5195 C 48.7772 45.5195 54.5195 39.8945 54.5195 32.6992 C 54.5195 25.4102 48.5195 19.9492 40.5743 20.0195 C 37.5743 13.9727 32.0665 10.4805 25.5743 10.4805 C 16.9259 10.4805 9.6368 17.3008 8.9571 26.0430 C 4.4102 27.2851 1.4805 31.1055 1.4805 35.7227 C 1.4805 41.5352 5.8399 45.5195 12.2618 45.5195 Z"
  }));
}

var _default = CloudFill;
exports["default"] = _default;