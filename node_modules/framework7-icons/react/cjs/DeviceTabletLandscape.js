"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DeviceTabletLandscape(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M48,1.0658141e-12 C50.209139,1.0658141e-12 52,1.790861 52,4 L52,36 C52,38.209139 50.209139,40 48,40 L4,40 C1.790861,40 -1.81188398e-12,38.209139 -1.81188398e-12,36 L-1.81188398e-12,4 C-1.81188398e-12,1.790861 1.790861,1.0658141e-12 4,1.0658141e-12 L48,1.0658141e-12 Z M47,4 L8,4 C7.44771525,4 7,4.44771525 7,5 L7,35 C7,35.5522847 7.44771525,36 8,36 L47,36 C47.5522847,36 48,35.5522847 48,35 L48,5 C48,4.44771525 47.5522847,4 47,4 Z M31,32 C31.5522847,32 32,32.4477153 32,33 C32,33.5522847 31.5522847,34 31,34 L21,34 C20.4477153,34 20,33.5522847 20,33 C20,32.4477153 20.4477153,32 21,32 L31,32 Z M3.5,24 C3.22385763,24 3,24.2238576 3,24.5 C3,24.7761424 3.22385763,25 3.5,25 C3.77614237,25 4,24.7761424 4,24.5 C4,24.2238576 3.77614237,24 3.5,24 Z M3.5,17 C3.22385763,17 3,17.2238576 3,17.5 L3,22.5 C3,22.7761424 3.22385763,23 3.5,23 C3.77614237,23 4,22.7761424 4,22.5 L4,17.5 C4,17.2238576 3.77614237,17 3.5,17 Z",
    transform: "translate(2 8)"
  }));
}

var _default = DeviceTabletLandscape;
exports["default"] = _default;