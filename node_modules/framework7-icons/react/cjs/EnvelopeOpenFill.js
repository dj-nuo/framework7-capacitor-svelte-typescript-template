"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function EnvelopeOpenFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 2.6640 50.6875 L 17.7812 35.7813 L 5.1015 23.4532 C 4.6093 22.9375 4.6093 22.3516 5.1249 21.9766 L 25.1640 6.4610 C 26.3827 5.5234 27.0624 5.0547 27.9999 5.0547 C 28.9609 5.0547 29.5936 5.5234 30.8358 6.4610 L 50.8981 21.9766 C 51.3906 22.3516 51.4141 22.9610 50.8981 23.4532 L 38.3124 35.7813 L 53.3360 50.6406 C 53.7109 49.9844 53.8751 48.8594 53.8751 47.2656 L 53.8751 23.5000 C 53.8751 21.0156 53.4532 19.7734 51.7184 18.3437 L 32.8515 3.6953 C 31.0936 2.3359 29.7343 1.4688 27.9999 1.4688 C 26.2890 1.4688 24.9296 2.3359 23.1718 3.6953 L 4.2577 18.3437 C 2.5936 19.7500 2.1249 21.0156 2.1249 23.5000 L 2.1249 47.2656 C 2.1249 48.9063 2.3124 50.0313 2.6640 50.6875 Z M 8.7812 54.5312 L 46.5157 54.5312 C 48.8360 54.5312 50.4532 54.1094 51.3436 53.2656 L 30.9296 33.1094 C 29.9218 32.0781 29.0312 31.6328 28.0468 31.6328 C 27.0858 31.6328 26.1718 32.0781 25.1640 33.1094 L 4.6562 53.3828 C 5.4296 54.1563 6.8124 54.5312 8.7812 54.5312 Z"
  }));
}

var _default = EnvelopeOpenFill;
exports["default"] = _default;