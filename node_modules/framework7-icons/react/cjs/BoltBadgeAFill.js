"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BoltBadgeAFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6.0157 30.9063 C 6.0157 31.8203 6.7189 32.5000 7.7033 32.5000 L 20.9455 32.5000 L 13.9611 51.4844 C 13.0470 53.8984 15.5548 55.1875 17.1486 53.2187 L 23.2423 45.6016 C 23.0548 44.6875 22.9611 43.7266 22.9611 42.7656 C 22.9611 34.6563 29.5001 27.9531 37.5392 27.6953 L 38.4298 26.5938 C 38.8282 26.1016 39.0392 25.6328 39.0392 25.0938 C 39.0392 24.2031 38.3595 23.5000 37.3751 23.5000 L 24.1095 23.5000 L 31.1173 4.5156 C 32.0079 2.1016 29.5235 .8125 27.9298 2.8047 L 6.6486 29.4063 C 6.2501 29.9219 6.0157 30.3906 6.0157 30.9063 Z M 38.0548 54.6719 C 44.5235 54.6719 49.9843 49.2813 49.9843 42.7656 C 49.9843 36.2500 44.5939 30.8594 38.0548 30.8594 C 31.5392 30.8594 26.1486 36.2500 26.1486 42.7656 C 26.1486 49.3281 31.5392 54.6719 38.0548 54.6719 Z M 33.2501 49.4453 C 32.5001 49.4453 31.9845 48.9531 31.9845 48.2500 C 31.9845 47.9688 32.0314 47.7344 32.1486 47.4297 L 36.2735 36.2969 C 36.6017 35.4766 37.2111 35.0547 38.0782 35.0547 C 38.9220 35.0547 39.5782 35.4766 39.8829 36.2969 L 44.0314 47.4297 C 44.1251 47.7344 44.1720 47.9688 44.1720 48.2500 C 44.1720 48.9297 43.6564 49.4453 42.9064 49.4453 C 42.2735 49.4453 41.8517 49.1172 41.6173 48.3672 L 40.6095 45.3672 L 35.5704 45.3672 L 34.5392 48.3672 C 34.2814 49.1172 33.8829 49.4453 33.2501 49.4453 Z M 36.2501 43.2578 L 39.9064 43.2578 L 38.0782 38.0078 L 38.1017 37.8906 L 38.0314 37.8906 L 38.0782 38.0078 Z"
  }));
}

var _default = BoltBadgeAFill;
exports["default"] = _default;