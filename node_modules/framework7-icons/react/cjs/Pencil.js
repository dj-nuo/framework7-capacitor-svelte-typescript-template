"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Pencil(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 43.2930 16.9258 L 45.6601 14.6055 C 46.8555 13.4101 46.9023 12.1211 45.8477 11.0430 L 45.0508 10.2461 C 43.9961 9.1914 42.7070 9.3086 41.5117 10.4570 L 39.1445 12.8008 Z M 15.6601 44.4883 L 41.2305 18.9414 L 37.1289 14.8164 L 11.5352 40.3867 L 9.3086 45.5898 C 9.0977 46.1523 9.6836 46.8086 10.2461 46.5742 Z"
  }));
}

var _default = Pencil;
exports["default"] = _default;