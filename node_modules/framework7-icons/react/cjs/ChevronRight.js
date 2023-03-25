"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ChevronRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 18.6953 48.3672 C 19.2813 48.3672 19.7969 48.1328 20.2187 47.7344 L 38.7813 29.5703 C 39.2266 29.1250 39.4609 28.5859 39.4609 28.0000 C 39.4609 27.3906 39.2266 26.8281 38.7813 26.4297 L 20.2187 8.2890 C 19.8203 7.8672 19.2813 7.6328 18.6953 7.6328 C 17.4766 7.6328 16.5391 8.5703 16.5391 9.7890 C 16.5391 10.3515 16.7969 10.9141 17.1718 11.3125 L 34.2109 28.0000 L 17.1718 44.6875 C 16.7969 45.0859 16.5391 45.6250 16.5391 46.2109 C 16.5391 47.4297 17.4766 48.3672 18.6953 48.3672 Z"
  }));
}

var _default = ChevronRight;
exports["default"] = _default;