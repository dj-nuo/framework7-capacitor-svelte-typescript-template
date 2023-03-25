"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Question(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 26.8867 37.5039 C 28.5039 37.5039 29.2539 36.3789 29.2539 34.8789 L 29.2539 34.0820 C 29.3008 30.9883 30.4258 29.6992 34.1758 27.1211 C 38.1836 24.4023 40.7383 21.2617 40.7383 16.7383 C 40.7383 9.7070 35.0195 5.6758 27.9180 5.6758 C 22.6211 5.6758 17.9570 8.1836 15.9648 12.7070 C 15.4726 13.8086 15.2617 14.8867 15.2617 15.7774 C 15.2617 17.1133 16.0352 18.0508 17.4648 18.0508 C 18.6601 18.0508 19.4570 17.3477 19.8086 16.1992 C 21.0274 11.7461 23.9570 10.0586 27.7539 10.0586 C 32.3242 10.0586 35.8867 12.6367 35.8867 16.7148 C 35.8867 20.0664 33.8008 21.9414 30.8008 24.0508 C 27.1211 26.6055 24.4258 29.3477 24.4258 33.4726 L 24.4258 34.9492 C 24.4258 36.4492 25.2461 37.5039 26.8867 37.5039 Z M 26.8867 50.3242 C 28.7383 50.3242 30.2148 48.8242 30.2148 46.9961 C 30.2148 45.1445 28.7383 43.6680 26.8867 43.6680 C 25.0586 43.6680 23.5352 45.1445 23.5352 46.9961 C 23.5352 48.8242 25.0586 50.3242 26.8867 50.3242 Z"
  }));
}

var _default = Question;
exports["default"] = _default;