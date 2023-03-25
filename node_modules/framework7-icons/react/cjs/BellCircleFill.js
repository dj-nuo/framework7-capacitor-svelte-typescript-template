"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BellCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 17.4765 36.0860 C 16.2577 36.0860 15.5546 35.4766 15.5546 34.5391 C 15.5546 33.2031 16.8905 32.0547 18.0390 30.8594 C 18.9062 29.8984 19.1171 28.0000 19.2109 26.4531 C 19.3280 21.4140 20.6874 17.9453 24.1796 16.6797 C 24.6952 14.9687 26.0780 13.6094 27.9999 13.6094 C 29.9218 13.6094 31.2812 14.9687 31.8202 16.6797 C 35.2890 17.9453 36.6718 21.4140 36.7655 26.4531 C 36.8593 28.0000 37.0468 29.8984 37.9609 30.8594 C 39.1093 32.0313 40.4452 33.2031 40.4452 34.5391 C 40.4452 35.4766 39.7187 36.0860 38.5234 36.0860 Z M 27.9999 41.5 C 25.7499 41.5 24.1327 39.9062 23.9687 37.9844 L 32.0312 37.9844 C 31.8671 39.9062 30.2265 41.5 27.9999 41.5 Z"
  }));
}

var _default = BellCircleFill;
exports["default"] = _default;