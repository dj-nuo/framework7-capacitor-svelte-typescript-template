"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Metronome(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 12.5781 28.1054 L 6.1328 40.7383 C 5.5234 41.9336 5.2187 43.1992 5.2187 44.3945 C 5.2187 47.7930 7.6796 50.6992 11.7812 50.6992 L 44.2187 50.6992 C 48.3437 50.6992 50.7813 47.7930 50.7813 44.3945 C 50.7813 43.1992 50.4765 41.9336 49.8674 40.7148 L 33.6015 8.7930 C 32.5000 6.6601 30.2031 5.3008 28.0000 5.3008 C 25.8203 5.3008 23.5000 6.6601 22.4218 8.7930 L 16.7968 19.8554 L 19.5390 22.5976 L 25.6562 10.4570 C 26.1484 9.4492 27.0156 8.7930 28.0000 8.7930 C 28.9844 8.7930 29.8515 9.4492 30.3671 10.4570 L 43.1640 35.9570 L 29.2422 35.9570 L 9.2265 15.9414 C 8.4531 15.1679 7.3984 15.1445 6.5781 15.9414 C 5.7578 16.7617 5.8046 17.8398 6.5781 18.6367 L 23.9218 35.9570 L 12.8359 35.9570 L 15.3906 30.9179 Z M 29.9687 33.0039 L 29.9687 16.5742 C 29.9687 15.4023 29.2656 14.6523 28.0937 14.6523 C 26.9453 14.6523 26.2422 15.4023 26.2422 16.5742 L 26.2422 29.2774 Z M 11.8046 47.0195 C 10.0703 47.0195 9.0625 45.7070 9.0625 44.2539 C 9.0625 43.7617 9.1796 43.2461 9.4140 42.7305 L 11.0078 39.5898 L 44.9922 39.5430 L 46.5859 42.7305 C 46.8437 43.2226 46.9844 43.7383 46.9844 44.2305 C 46.9844 45.7070 45.9531 47.0195 44.2187 47.0195 Z"
  }));
}

var _default = Metronome;
exports["default"] = _default;