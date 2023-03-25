"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LogoStackoverflow(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5.22307574,30.9345 L5.22307574,44.4341791 L36.3289243,44.4341791 L36.3289243,30.9345 L40.776,30.9345 L40.776,48.9345 L0.776,48.9345 L0.776,30.9345 L5.22307574,30.9345 Z M32,35 L32,40 L10,40 L10,35 L32,35 Z M10.9277895,25 L33,29.6115033 L32.0722105,34 L10,29.3884967 L10.9277895,25 Z M14.8746402,16 L35,25.0945103 L33.1253598,29 L13,19.9054897 L14.8746402,16 Z M20.8556275,7 L38,20.7080348 L35.1443725,24 L18,10.2919652 L20.8556275,7 Z M29.6024511,0 L43,17.4101966 L39.3975489,20 L26,2.58980337 L29.6024511,0 Z",
    transform: "translate(6 4)"
  }));
}

var _default = LogoStackoverflow;
exports["default"] = _default;