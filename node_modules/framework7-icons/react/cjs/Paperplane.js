"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Paperplane(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 32.7812 52.5508 C 34.4687 52.5508 35.6640 51.0977 36.5312 48.8477 L 51.8829 8.7461 C 52.3048 7.6679 52.5626 6.7070 52.5626 5.9101 C 52.5626 4.3867 51.6016 3.4492 50.0781 3.4492 C 49.2813 3.4492 48.3203 3.6836 47.2423 4.1055 L 6.9296 19.5508 C 4.9609 20.3008 3.4374 21.4961 3.4374 23.2070 C 3.4374 25.3633 5.0780 26.0898 7.3280 26.7695 L 24.2499 31.7383 L 29.1718 48.4492 C 29.8749 50.8164 30.6015 52.5508 32.7812 52.5508 Z M 25.3046 28.1758 L 9.1328 23.2305 C 8.7577 23.1133 8.6406 23.0195 8.6406 22.8555 C 8.6406 22.6914 8.7343 22.5742 9.0859 22.4336 L 40.7733 10.4336 C 42.6484 9.7305 44.4531 8.7930 46.1874 7.9961 C 44.6406 9.2617 42.7187 10.7617 41.4296 12.0508 Z M 33.1562 47.3945 C 32.9687 47.3945 32.8749 47.2305 32.7577 46.8555 L 27.8124 30.6836 L 43.9374 14.5586 C 45.2031 13.2930 46.7733 11.3242 48.0155 9.7305 C 47.2187 11.5117 46.2812 13.3164 45.5546 15.2148 L 33.5546 46.9023 C 33.4140 47.2539 33.3202 47.3945 33.1562 47.3945 Z"
  }));
}

var _default = Paperplane;
exports["default"] = _default;