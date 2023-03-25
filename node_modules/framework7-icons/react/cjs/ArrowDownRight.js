"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowDownRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 44.0078 19.7851 C 44.0078 18.5430 43.0234 17.6289 41.9219 17.6289 C 40.7969 17.6289 39.8594 18.6133 39.8594 19.6914 L 39.8594 27.1680 L 40.2812 37.8320 L 36.5312 33.5664 L 15.5547 12.6133 C 15.1328 12.1914 14.6406 11.9805 14.1016 11.9805 C 12.9532 11.9805 11.9688 13.0117 11.9688 14.1133 C 11.9688 14.6289 12.2032 15.1445 12.6250 15.5664 L 33.5547 36.5430 L 37.8203 40.2695 L 26.6641 39.8476 L 19.6797 39.8476 C 18.6016 39.8476 17.6172 40.7852 17.6172 41.8867 C 17.6172 42.9883 18.4844 43.9727 19.7734 43.9727 L 41.7812 44.0195 C 43.1641 44.0195 44.0312 43.1055 44.0312 41.7930 Z"
  }));
}

var _default = ArrowDownRight;
exports["default"] = _default;