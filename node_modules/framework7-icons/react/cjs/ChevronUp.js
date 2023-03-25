"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ChevronUp(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 8.2656 35.8047 C 7.8672 36.1797 7.6328 36.7187 7.6328 37.3282 C 7.6328 38.5469 8.5703 39.4609 9.7891 39.4609 C 10.3750 39.4609 10.9375 39.2500 11.3125 38.8516 L 28.0000 21.7891 L 44.6875 38.8516 C 45.0625 39.2500 45.6484 39.4609 46.2109 39.4609 C 47.4297 39.4609 48.3672 38.5469 48.3672 37.3282 C 48.3672 36.7187 48.1328 36.1797 47.7344 35.8047 L 29.5703 17.2422 C 29.1718 16.7969 28.5859 16.5391 28.0000 16.5391 C 27.3906 16.5391 26.8515 16.7969 26.4297 17.2422 Z"
  }));
}

var _default = ChevronUp;
exports["default"] = _default;