"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowRightCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 40.0702 27.9766 C 40.0702 27.4844 39.8827 27.0859 39.4140 26.6172 L 31.4921 18.6719 C 31.1874 18.3672 30.7655 18.2031 30.2733 18.2031 C 29.3124 18.2031 28.5858 18.9297 28.5858 19.8906 C 28.5858 20.4063 28.7968 20.8281 29.1014 21.1328 L 32.0312 24.0390 L 34.8671 26.4063 L 29.9218 26.2188 L 17.6874 26.2188 C 16.6796 26.2188 15.9296 26.9688 15.9296 27.9766 C 15.9296 28.9844 16.6796 29.7344 17.6874 29.7344 L 29.9218 29.7344 L 34.8671 29.5469 L 32.0312 31.9375 L 29.1014 34.8203 C 28.7733 35.1484 28.5858 35.5703 28.5858 36.0859 C 28.5858 37.0234 29.3124 37.7968 30.2733 37.7968 C 30.7655 37.7968 31.1874 37.6094 31.4921 37.3047 L 39.4140 29.3594 C 39.8593 28.9141 40.0702 28.5156 40.0702 27.9766 Z"
  }));
}

var _default = ArrowRightCircle;
exports["default"] = _default;