"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Bitcoin(props) {
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
    d: "M15,37.4111328 L11,37.4111328 L11,42.4 L6,42.4 L6,37.4111328 L4.6953125,37.4111328 L4.6953125,37.4 L0,37.4 L0,32.4 L4.6953125,32.4 L4.6953125,10 L0,10 L0,5 L6,5 L6,0 L11,0 L11,5 L15,5 L15,0 L20,0 L20,5 L18.8007812,5 C24.8876953,5 28.7060547,8.12207031 28.7060547,13.0859375 C28.7060547,16.6347656 26.0556641,19.5996094 22.6191406,20.1162109 L22.6191406,20.2958984 C27.0214844,20.6328125 30.2558594,23.8447266 30.2558594,28.1347656 C30.2558594,33.65554 26.2385243,37.1781634 19.7100271,37.4 L20,37.4 L20,42.4 L15,42.4 L15,37.4111328 Z M11.4785156,10.0537109 L11.4785156,18.4765625 L16.3525391,18.4765625 C19.96875,18.4765625 22.0351562,16.8818359 22.0351562,14.1416016 C22.0351562,11.5361328 20.2158203,10.0537109 17.0488281,10.0537109 L11.4785156,10.0537109 Z M11.4785156,32.3574219 L17.3183594,32.3574219 C21.2265625,32.3574219 23.3378906,30.6953125 23.3378906,27.5957031 C23.3378906,24.5634766 21.1591797,22.9462891 17.1611328,22.9462891 L11.4785156,22.9462891 L11.4785156,32.3574219 Z",
    transform: "translate(13 7)"
  }));
}

var _default = Bitcoin;
exports["default"] = _default;