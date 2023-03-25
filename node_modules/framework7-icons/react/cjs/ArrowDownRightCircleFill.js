"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowDownRightCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 35.2655 21.6250 C 36.3905 21.6250 37.1171 22.4688 37.1171 23.6875 L 37.1171 35.8516 C 37.1171 37.3750 36.3202 37.9844 34.9843 37.9844 L 22.7265 37.9844 C 21.5312 37.9844 20.7343 37.2578 20.7343 36.0859 C 20.7343 34.9609 21.5546 34.1875 22.7733 34.1875 L 27.4843 34.1875 L 31.3046 34.6094 L 27.2733 30.8594 L 17.7577 21.3437 C 17.3827 20.9688 17.1483 20.4766 17.1483 19.9609 C 17.1483 18.7890 17.8749 18.0390 19.0234 18.0390 C 19.6562 18.0390 20.1249 18.25 20.4999 18.6250 L 30.0155 28.1406 L 33.7421 32.1250 L 33.3671 28.0937 L 33.3671 23.6172 C 33.3671 22.3984 34.0936 21.6250 35.2655 21.6250 Z"
  }));
}

var _default = ArrowDownRightCircleFill;
exports["default"] = _default;