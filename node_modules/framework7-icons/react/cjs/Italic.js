"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Italic(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 17.7344 44.7578 L 32.5703 44.7578 C 33.6718 44.7578 34.4453 44.0781 34.4453 42.9766 C 34.4453 41.9219 33.6953 41.2422 32.5938 41.2422 L 27.3203 41.2422 L 33.0156 14.7578 L 38.2656 14.7578 C 39.3672 14.7578 40.1406 14.0781 40.1406 12.9766 C 40.1406 11.9219 39.3906 11.2422 38.2891 11.2422 L 23.4297 11.2422 C 22.3281 11.2422 21.5547 11.9219 21.5547 12.9766 C 21.5547 14.0781 22.3516 14.7578 23.4531 14.7578 L 28.6797 14.7578 L 22.9844 41.2422 L 17.7109 41.2422 C 16.6094 41.2422 15.8594 41.9219 15.8594 42.9766 C 15.8594 44.0781 16.6328 44.7578 17.7344 44.7578 Z"
  }));
}

var _default = Italic;
exports["default"] = _default;