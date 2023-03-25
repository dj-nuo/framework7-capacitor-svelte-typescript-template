"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BackwardEnd(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 11.9102 47.3594 C 13.0117 47.3594 13.9024 46.5156 13.9024 45.4141 L 13.9024 28.9141 C 13.8320 28.6094 13.7851 28.3047 13.7851 28.0000 C 13.7851 27.6719 13.8320 27.3672 13.9024 27.0859 L 13.9024 10.6094 C 13.9024 9.5078 13.0117 8.6406 11.9102 8.6406 C 10.8086 8.6406 9.8945 9.5078 9.8945 10.6094 L 9.8945 45.4141 C 9.8945 46.5156 10.8086 47.3594 11.9102 47.3594 Z M 42.7305 46.4219 C 44.5820 46.4219 46.1055 45.0156 46.1055 42.3906 L 46.1055 13.6094 C 46.1055 10.9844 44.5820 9.5781 42.7305 9.5781 C 41.7929 9.5781 40.9961 9.8828 40.0351 10.4453 L 16.1524 24.5078 C 14.8867 25.2578 14.1836 26.1250 13.9024 27.0859 L 13.9024 28.9141 C 14.1836 29.8750 14.8867 30.7422 16.1524 31.4922 L 40.0351 45.5547 C 40.9961 46.1172 41.7929 46.4219 42.7305 46.4219 Z M 41.7227 42.0859 C 41.5586 42.0859 41.3711 42.0156 41.1367 41.8750 L 18.8711 28.6562 C 18.5430 28.4688 18.3555 28.3047 18.3555 28.0000 C 18.3555 27.6719 18.5430 27.5313 18.8711 27.3437 L 41.1367 14.1250 C 41.3711 13.9844 41.5586 13.9141 41.7227 13.9141 C 42.0508 13.9141 42.3555 14.1484 42.3555 14.6172 L 42.3555 41.3828 C 42.3555 41.8516 42.0508 42.0859 41.7227 42.0859 Z"
  }));
}

var _default = BackwardEnd;
exports["default"] = _default;