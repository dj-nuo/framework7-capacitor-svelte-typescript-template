"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Creditcard(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 9.6249 47.7109 L 46.3751 47.7109 C 51.2735 47.7109 53.7344 45.2969 53.7344 40.4687 L 53.7344 15.5547 C 53.7344 10.7266 51.2735 8.2891 46.3751 8.2891 L 9.6249 8.2891 C 4.7265 8.2891 2.2656 10.7266 2.2656 15.5547 L 2.2656 40.4687 C 2.2656 45.2969 4.7265 47.7109 9.6249 47.7109 Z M 6.0390 15.7656 C 6.0390 13.3281 7.3515 12.0625 9.6952 12.0625 L 46.3280 12.0625 C 48.6484 12.0625 49.9607 13.3281 49.9607 15.7656 L 49.9607 17.7344 L 6.0390 17.7344 Z M 9.6952 43.9375 C 7.3515 43.9375 6.0390 42.6953 6.0390 40.2578 L 6.0390 23.0547 L 49.9607 23.0547 L 49.9607 40.2578 C 49.9607 42.6953 48.6484 43.9375 46.3280 43.9375 Z M 12.3905 37.0000 L 18.1327 37.0000 C 19.5156 37.0000 20.4296 36.0859 20.4296 34.7500 L 20.4296 30.4140 C 20.4296 29.1015 19.5156 28.1640 18.1327 28.1640 L 12.3905 28.1640 C 11.0078 28.1640 10.0937 29.1015 10.0937 30.4140 L 10.0937 34.7500 C 10.0937 36.0859 11.0078 37.0000 12.3905 37.0000 Z"
  }));
}

var _default = Creditcard;
exports["default"] = _default;