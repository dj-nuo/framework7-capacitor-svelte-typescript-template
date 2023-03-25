"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BedDouble(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 1.9022 46.7226 L 3.2013 46.7226 C 4.3380 46.7226 5.0803 46.0035 5.0803 44.8668 L 5.0803 41.5726 C 5.3355 41.6422 6.0779 41.6886 6.6114 41.6886 L 49.4118 41.6886 C 49.9454 41.6886 50.6647 41.6422 50.9198 41.5726 L 50.9198 44.8668 C 50.9198 46.0035 51.6619 46.7226 52.7988 46.7226 L 54.1210 46.7226 C 55.2579 46.7226 56 46.0035 56 44.8668 L 56 29.7416 C 56 25.7748 53.9818 23.5477 50.2471 23.2694 L 50.2471 15.6604 C 50.2471 11.5544 48.0664 9.4665 44.0765 9.4665 L 11.9238 9.4665 C 7.9569 9.4665 5.7531 11.5544 5.7531 15.6604 L 5.7531 23.2694 C 2.0182 23.5477 0 25.7748 0 29.7416 L 0 44.8668 C 0 46.0035 .7423 46.7226 1.9022 46.7226 Z M 11.5758 19.1401 C 11.5758 17.0987 12.7125 15.9620 14.8003 15.9620 L 22.5717 15.9620 C 24.6363 15.9620 25.7962 17.0987 25.7962 19.1401 L 25.7962 23.2462 L 11.5758 23.2462 Z M 30.2271 19.1401 C 30.2271 17.0987 31.3638 15.9620 33.4516 15.9620 L 41.1997 15.9620 C 43.2874 15.9620 44.4476 17.0987 44.4476 19.1401 L 44.4476 23.2462 L 30.2271 23.2462 Z M 4.6396 38.3017 C 4.1756 38.3017 3.8741 37.9769 3.8741 37.4434 L 3.8741 29.3937 C 3.8741 27.7002 4.9876 26.6331 6.7042 26.6331 L 49.3192 26.6331 C 51.0124 26.6331 52.1261 27.7002 52.1261 29.3937 L 52.1261 37.4434 C 52.1261 37.9769 51.8244 38.3017 51.3835 38.3017 Z"
  }));
}

var _default = BedDouble;
exports["default"] = _default;