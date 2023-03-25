"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Bars(props) {
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
    d: "M38.0027084,20 C39.1057821,20 40,20.8877296 40,22 C40,23.1045695 39.1084602,24 38.0027084,24 L1.99729162,24 C0.894217919,24 0,23.1122704 0,22 C0,20.8954305 0.891539827,20 1.99729162,20 L38.0027084,20 Z M38.0027084,10 C39.1057821,10 40,10.8877296 40,12 C40,13.1045695 39.1084602,14 38.0027084,14 L1.99729162,14 C0.894217919,14 0,13.1122704 0,12 C0,10.8954305 0.891539827,10 1.99729162,10 L38.0027084,10 Z M38.0027084,0 C39.1057821,0 40,0.887729645 40,2 C40,3.1045695 39.1084602,4 38.0027084,4 L1.99729162,4 C0.894217919,4 0,3.11227036 0,2 C0,0.8954305 0.891539827,0 1.99729162,0 L38.0027084,0 Z",
    transform: "translate(8 16)"
  }));
}

var _default = Bars;
exports["default"] = _default;