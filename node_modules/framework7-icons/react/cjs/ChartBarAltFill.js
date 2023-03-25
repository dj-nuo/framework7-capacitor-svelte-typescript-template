"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ChartBarAltFill(props) {
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
    d: "M16 0L22 0C23.1045695 0 24 .8954305 24 2L24 36C24 37.1045695 23.1045695 38 22 38L16 38C14.8954305 38 14 37.1045695 14 36L14 2C14 .8954305 14.8954305 0 16 0zM2 10L8 10C9.1045695 10 10 10.8954305 10 12L10 36C10 37.1045695 9.1045695 38 8 38L2 38C.8954305 38 0 37.1045695 0 36L0 12C0 10.8954305.8954305 10 2 10zM30 21L36 21C37.1045695 21 38 21.8954305 38 23L38 36C38 37.1045695 37.1045695 38 36 38L30 38C28.8954305 38 28 37.1045695 28 36L28 23C28 21.8954305 28.8954305 21 30 21z",
    transform: "translate(9 12)"
  }));
}

var _default = ChartBarAltFill;
exports["default"] = _default;