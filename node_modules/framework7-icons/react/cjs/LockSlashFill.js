"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LockSlashFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.6485 6.2852 C 32.5001 6.2852 36.4141 9.8711 36.4141 16.4102 L 36.4141 22.4336 L 25.8907 22.4571 L 43.9376 40.5273 L 43.9376 27.3555 C 43.9376 24.3320 42.6954 22.7617 40.1876 22.4805 L 40.1876 16.9258 C 40.1876 7.3398 34.1876 2.6758 27.6485 2.6758 C 22.1407 2.6758 17.3126 6.0039 15.8126 12.4024 L 18.9532 15.5430 C 19.3985 9.5195 22.9610 6.2852 27.6485 6.2852 Z M 46.8204 52.6211 C 47.5235 53.3242 48.6719 53.3242 49.3748 52.6211 C 50.0780 51.9180 50.0780 50.7695 49.3748 50.0664 L 9.1797 9.8945 C 8.4766 9.1914 7.3048 9.1914 6.6017 9.8945 C 5.9220 10.5742 5.9220 11.7695 6.6017 12.4492 Z M 16.0235 50.1602 L 39.2970 50.1602 C 39.7188 50.1602 40.0938 50.1367 40.4219 50.0898 L 13.4219 23.0664 C 12.0626 23.7695 11.3829 25.1524 11.3829 27.3789 L 11.3829 45.2617 C 11.3829 48.6367 12.9063 50.1602 16.0235 50.1602 Z"
  }));
}

var _default = LockSlashFill;
exports["default"] = _default;