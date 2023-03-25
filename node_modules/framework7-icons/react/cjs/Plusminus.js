"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Plusminus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9766 35.9102 C 29.125 35.9102 30.0859 34.9727 30.0859 33.8476 L 30.0859 24.2149 L 40.0937 24.2149 C 41.2187 24.2149 42.2031 23.2539 42.2031 22.1055 C 42.2031 20.9570 41.2187 20.0196 40.0937 20.0196 L 30.0859 20.0196 L 30.0859 10.4570 C 30.0859 9.3320 29.125 8.4180 27.9766 8.4180 C 26.8281 8.4180 25.8906 9.3320 25.8906 10.4570 L 25.8906 20.0196 L 15.9062 20.0196 C 14.7813 20.0196 13.7969 20.9570 13.7969 22.1055 C 13.7969 23.2539 14.7813 24.2149 15.9062 24.2149 L 25.8906 24.2149 L 25.8906 33.8476 C 25.8906 34.9727 26.8281 35.9102 27.9766 35.9102 Z M 15.9062 47.5820 L 40.0937 47.5820 C 41.2187 47.5820 42.2031 46.6211 42.2031 45.4727 C 42.2031 44.3242 41.2187 43.3867 40.0937 43.3867 L 15.9062 43.3867 C 14.7813 43.3867 13.7969 44.3242 13.7969 45.4727 C 13.7969 46.6211 14.7813 47.5820 15.9062 47.5820 Z"
  }));
}

var _default = Plusminus;
exports["default"] = _default;