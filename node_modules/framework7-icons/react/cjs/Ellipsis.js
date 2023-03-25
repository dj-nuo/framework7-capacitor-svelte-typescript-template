"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Ellipsis(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 15.3203 28 C 15.3203 25.3984 13.2344 23.3125 10.5860 23.3125 C 7.9844 23.3125 5.8985 25.3984 5.8985 28 C 5.8985 30.6016 7.9844 32.6875 10.5860 32.6875 C 13.2344 32.6875 15.3203 30.6016 15.3203 28 Z M 32.6641 28 C 32.6641 25.3984 30.6016 23.3125 28.0000 23.3125 C 25.3984 23.3125 23.3360 25.3984 23.3360 28 C 23.3360 30.6016 25.3984 32.6875 28.0000 32.6875 C 30.6016 32.6875 32.6641 30.6016 32.6641 28 Z M 50.1015 28 C 50.1015 25.3984 47.9922 23.3125 45.4141 23.3125 C 42.7657 23.3125 40.6797 25.3984 40.6797 28 C 40.6797 30.6016 42.7657 32.6875 45.4141 32.6875 C 47.9922 32.6875 50.1015 30.6016 50.1015 28 Z"
  }));
}

var _default = Ellipsis;
exports["default"] = _default;