"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CapslockFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 20.7812 37.6211 L 35.2421 37.6211 C 38.5233 37.6211 40.2577 35.6992 40.2577 32.6055 L 40.2577 28.4570 L 49.1404 28.4570 C 51.0859 28.4570 52.6329 27.3086 52.6329 25.5039 C 52.6329 24.4024 52.0703 23.5351 51.0158 22.6211 L 30.9062 4.8789 C 29.9452 4.0351 29.0546 3.4727 27.9999 3.4727 C 26.9687 3.4727 26.0780 4.0351 25.1171 4.8789 L 4.9843 22.6445 C 3.8828 23.6055 3.3671 24.4024 3.3671 25.5039 C 3.3671 27.3086 4.9140 28.4570 6.8828 28.4570 L 15.7421 28.4570 L 15.7421 32.6055 C 15.7421 35.6992 17.4999 37.6211 20.7812 37.6211 Z M 19.7733 52.5273 L 36.0624 52.5273 C 38.7577 52.5273 40.3046 51.0273 40.3046 48.3086 L 40.3046 44.9336 C 40.3046 42.2148 38.7577 40.6680 36.0624 40.6680 L 19.7733 40.6680 C 17.0546 40.6680 15.5077 42.2383 15.5077 44.9336 L 15.5077 48.3086 C 15.5077 51.0039 17.0546 52.5273 19.7733 52.5273 Z"
  }));
}

var _default = CapslockFill;
exports["default"] = _default;