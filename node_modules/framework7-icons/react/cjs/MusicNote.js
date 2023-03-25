"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MusicNote(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 42.6484 15.1797 L 42.6484 6.3437 C 42.6484 5.0312 41.5703 4.1641 40.3047 4.4453 L 27.8594 7.1406 C 26.2656 7.4922 25.3984 8.3359 25.3984 9.7422 L 25.5391 35.8047 C 25.5391 36.8828 25.0469 37.5859 24.0860 37.7734 L 20.3594 38.5703 C 15.5781 39.5547 13.3516 42.0156 13.3516 45.6015 C 13.3516 49.2578 16.1875 51.8359 20.1484 51.8359 C 23.6172 51.8359 28.8672 49.2344 28.8672 42.3437 L 28.8672 20.8984 C 28.8672 19.7265 29.0547 19.5156 30.1094 19.3047 L 41.2656 16.8437 C 42.1094 16.6563 42.6484 16 42.6484 15.1797 Z"
  }));
}

var _default = MusicNote;
exports["default"] = _default;