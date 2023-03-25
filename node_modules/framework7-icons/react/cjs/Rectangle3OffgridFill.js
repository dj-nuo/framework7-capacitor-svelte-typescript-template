"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Rectangle3OffgridFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 3.9914 28.2934 L 23.1104 28.2934 C 25.7648 28.2934 27.1019 26.9563 27.1019 24.2022 L 27.1019 15.0618 C 27.1019 12.3077 25.7648 10.9905 23.1104 10.9905 L 3.9914 10.9905 C 1.3371 10.9905 0 12.3077 0 15.0618 L 0 24.2022 C 0 26.9563 1.3371 28.2934 3.9914 28.2934 Z M 38.1384 44.7781 L 51.9884 44.7781 C 54.6627 44.7781 56 43.4410 56 40.6869 L 56 18.0753 C 56 15.3212 54.6627 13.9841 51.9884 13.9841 L 38.1384 13.9841 C 35.4440 13.9841 34.1069 15.3212 34.1069 18.0753 L 34.1069 40.6869 C 34.1069 43.4410 35.4440 44.7781 38.1384 44.7781 Z M 8.8410 47.5521 L 25.5253 47.5521 C 28.2195 47.5521 29.5566 46.2350 29.5566 43.4809 L 29.5566 36.8750 C 29.5566 34.1209 28.2195 32.7838 25.5253 32.7838 L 8.8410 32.7838 C 6.1668 32.7838 4.8296 34.1209 4.8296 36.8750 L 4.8296 43.4809 C 4.8296 46.2350 6.1668 47.5521 8.8410 47.5521 Z"
  }));
}

var _default = Rectangle3OffgridFill;
exports["default"] = _default;