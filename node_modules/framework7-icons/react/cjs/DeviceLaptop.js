"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DeviceLaptop(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M44,32 L51.5,32 C51.7761424,32 52,32.2238576 52,32.5 L52,34 C52,35.1045695 49.1045695,36 48,36 L4,36 C2.8954305,36 0,35.1045695 0,34 L0,32.5 C0,32.2238576 0.223857625,32 0.5,32 L8,32 C5.790861,32 4,30.209139 4,28 L4,4 C4,1.790861 5.790861,0 8,0 L44,0 C46.209139,0 48,1.790861 48,4 L48,28 C48,30.209139 46.209139,32 44,32 Z M8,5 L8,27 C8,27.5522847 8.44771525,28 9,28 L43,28 C43.5522847,28 44,27.5522847 44,27 L44,5 C44,4.44771525 43.5522847,4 43,4 L9,4 C8.44771525,4 8,4.44771525 8,5 Z M22,31 C21.4477153,31 21,31.4477153 21,32 C21,32.5522847 21.4477153,33 22,33 L30,33 C30.5522847,33 31,32.5522847 31,32 C31,31.4477153 30.5522847,31 30,31 L22,31 Z",
    transform: "translate(2 10)"
  }));
}

var _default = DeviceLaptop;
exports["default"] = _default;