"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUpRightCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 35.2655 34.3984 C 34.0936 34.3984 33.3671 33.6250 33.3671 32.4063 L 33.3671 27.9297 L 33.7421 23.8984 L 30.0155 27.8828 L 20.4999 37.3984 C 20.1249 37.7734 19.6562 37.9844 19.0234 37.9844 C 17.8749 37.9844 17.1483 37.2344 17.1483 36.0625 C 17.1483 35.5469 17.3827 35.0547 17.7577 34.6797 L 27.2733 25.1641 L 31.3046 21.4141 L 27.4843 21.8359 L 22.7733 21.8359 C 21.5546 21.8359 20.7343 21.0625 20.7343 19.9375 C 20.7343 18.7656 21.5312 18.0390 22.7265 18.0390 L 34.9843 18.0390 C 36.3202 18.0390 37.1171 18.6484 37.1171 20.1719 L 37.1171 32.3359 C 37.1171 33.5547 36.3905 34.3984 35.2655 34.3984 Z"
  }));
}

var _default = ArrowUpRightCircleFill;
exports["default"] = _default;