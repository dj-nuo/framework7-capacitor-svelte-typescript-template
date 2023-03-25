"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DeviceTabletPortrait(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M36,0 C38.209139,0 40,1.790861 40,4 L40,48 C40,50.209139 38.209139,52 36,52 L4,52 C1.790861,52 -1.48503432e-12,50.209139 -1.48503432e-12,48 L-1.48503432e-12,4 C-1.48503432e-12,1.790861 1.790861,0 4,0 L36,0 Z M35,7 L5,7 C4.44771525,7 4,7.44771525 4,8 L4,47 C4,47.5522847 4.44771525,48 5,48 L35,48 C35.5522847,48 36,47.5522847 36,47 L36,8 C36,7.44771525 35.5522847,7 35,7 Z M25,44 C25.5522847,44 26,44.4477153 26,45 C26,45.5522847 25.5522847,46 25,46 L15,46 C14.4477153,46 14,45.5522847 14,45 C14,44.4477153 14.4477153,44 15,44 L25,44 Z M22.5,3 L17.5,3 C17.2238576,3 17,3.22385763 17,3.5 C17,3.77614237 17.2238576,4 17.5,4 L22.5,4 C22.7761424,4 23,3.77614237 23,3.5 C23,3.22385763 22.7761424,3 22.5,3 Z M15.5,3 C15.2238576,3 15,3.22385763 15,3.5 C15,3.77614237 15.2238576,4 15.5,4 C15.7761424,4 16,3.77614237 16,3.5 C16,3.22385763 15.7761424,3 15.5,3 Z",
    transform: "translate(8 2)"
  }));
}

var _default = DeviceTabletPortrait;
exports["default"] = _default;