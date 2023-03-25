"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PlusCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 27.9296 39.1328 C 29.1952 39.1328 29.9452 38.2656 29.9452 36.9063 L 29.9452 29.9688 L 37.2812 29.9688 C 38.5936 29.9688 39.5077 29.2890 39.5077 28.0469 C 39.5077 26.7812 38.6405 26.0547 37.2812 26.0547 L 29.9452 26.0547 L 29.9452 18.6953 C 29.9452 17.3125 29.1952 16.4688 27.9296 16.4688 C 26.6874 16.4688 26.0077 17.3594 26.0077 18.6953 L 26.0077 26.0547 L 18.6952 26.0547 C 17.3124 26.0547 16.4452 26.7812 16.4452 28.0469 C 16.4452 29.2890 17.3827 29.9688 18.6952 29.9688 L 26.0077 29.9688 L 26.0077 36.9063 C 26.0077 38.2188 26.6874 39.1328 27.9296 39.1328 Z"
  }));
}

var _default = PlusCircle;
exports["default"] = _default;