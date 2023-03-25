"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function XmarkSealFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 23.6641 52.3985 C 26.6172 55.375 29.3594 55.3516 32.3126 52.3985 L 35.9219 48.8125 C 36.2969 48.4610 36.6250 48.3203 37.1172 48.3203 L 42.1797 48.3203 C 46.3749 48.3203 48.3204 46.3985 48.3204 42.1797 L 48.3204 37.1172 C 48.3204 36.625 48.4610 36.2969 48.8124 35.9219 L 52.3749 32.3125 C 55.3749 29.3594 55.3514 26.6172 52.3749 23.6641 L 48.8124 20.0547 C 48.4610 19.7031 48.3204 19.3516 48.3204 18.8829 L 48.3204 13.7969 C 48.3204 9.625 46.3985 7.6563 42.1797 7.6563 L 37.1172 7.6563 C 36.6250 7.6563 36.2969 7.5391 35.9219 7.1875 L 32.3126 3.6016 C 29.3594 .6250 26.6172 .6485 23.6641 3.6016 L 20.0547 7.1875 C 19.7032 7.5391 19.3516 7.6563 18.8828 7.6563 L 13.7969 7.6563 C 9.6016 7.6563 7.6563 9.5782 7.6563 13.7969 L 7.6563 18.8829 C 7.6563 19.3516 7.5391 19.7031 7.1876 20.0547 L 3.6016 23.6641 C .6251 26.6172 .6485 29.3594 3.6016 32.3125 L 7.1876 35.9219 C 7.5391 36.2969 7.6563 36.625 7.6563 37.1172 L 7.6563 42.1797 C 7.6563 46.3750 9.6016 48.3203 13.7969 48.3203 L 18.8828 48.3203 C 19.3516 48.3203 19.7032 48.4610 20.0547 48.8125 Z M 19.6328 38.5469 C 18.5547 38.5469 17.6407 37.6329 17.6407 36.5313 C 17.6407 36.0156 17.8750 35.5234 18.2266 35.1953 L 25.2110 28.1875 L 18.2266 21.2031 C 17.8750 20.875 17.6407 20.3829 17.6407 19.8438 C 17.6407 18.7656 18.5313 17.8985 19.6328 17.8985 C 20.1719 17.8985 20.6407 18.1094 20.9454 18.4609 L 27.9766 25.4453 L 35.0313 18.4375 C 35.4063 18.0156 35.8516 17.8516 36.3672 17.8516 C 37.4454 17.8516 38.3360 18.7422 38.3360 19.8203 C 38.3360 20.3594 38.1719 20.8047 37.7501 21.1797 L 30.7657 28.1875 L 37.7266 35.1485 C 38.1016 35.5234 38.3126 35.9922 38.3126 36.5313 C 38.3126 37.6329 37.4454 38.5469 36.3438 38.5469 C 35.7813 38.5469 35.2891 38.2891 34.9610 37.9609 L 27.9766 30.9531 L 20.9923 37.9609 C 20.6641 38.3125 20.1719 38.5469 19.6328 38.5469 Z"
  }));
}

var _default = XmarkSealFill;
exports["default"] = _default;