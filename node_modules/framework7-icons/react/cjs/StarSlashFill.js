"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function StarSlashFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 40.5157 33.5313 L 52.2578 25.0703 C 53.7112 24.0391 54.2968 22.9609 53.9219 21.7891 C 53.5470 20.6640 52.4454 20.1016 50.6406 20.125 L 35.2891 20.2187 L 30.6251 5.5703 C 30.0626 3.8359 29.2188 2.9687 28.0001 2.9687 C 26.8048 2.9687 25.9610 3.8359 25.3985 5.5703 L 22.2813 15.3672 Z M 48.4610 50.5234 C 49.1642 51.2266 50.3358 51.2266 51.0155 50.5234 C 51.7187 49.8203 51.7187 48.6719 51.0155 47.9687 L 14.4766 11.5469 C 13.7735 10.8437 12.6251 10.8437 11.8985 11.5469 C 11.2188 12.2031 11.2188 13.3984 11.8985 14.1016 Z M 11.9688 52.2813 C 12.9298 53.0078 14.1485 52.7500 15.6016 51.6953 L 28.0001 42.6016 L 40.4220 51.6953 C 41.8751 52.7500 43.0938 53.0313 44.0548 52.2813 C 44.5235 51.9062 44.6642 51.3437 44.0313 50.5703 L 43.1173 49.1641 L 14.0548 20.1718 L 5.3829 20.125 C 3.5782 20.1016 2.4766 20.6640 2.1016 21.7891 C 1.7032 22.9609 2.3126 24.0391 3.7657 25.0703 L 16.2813 34.0703 L 11.3829 48.6484 C 10.7969 50.3594 11.0079 51.5547 11.9688 52.2813 Z"
  }));
}

var _default = StarSlashFill;
exports["default"] = _default;