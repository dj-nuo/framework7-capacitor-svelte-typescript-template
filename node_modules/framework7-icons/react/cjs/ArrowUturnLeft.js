"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUturnLeft(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 50.1484 34.9140 C 50.1484 25.9609 44.1016 19.7734 33.3907 19.7734 L 17.6641 19.7734 L 12.1563 20.0313 L 16.6095 16.2344 L 23.3595 9.625 C 23.7344 9.2500 23.9220 8.8047 23.9220 8.1953 C 23.9220 6.9766 23.1016 6.1328 21.8595 6.1328 C 21.3438 6.1328 20.7344 6.3906 20.3360 6.7891 L 6.5548 20.3125 C 6.0860 20.7578 5.8516 21.2969 5.8516 21.8828 C 5.8516 22.4453 6.0860 22.9844 6.5548 23.4297 L 20.3360 36.9531 C 20.7344 37.375 21.3438 37.6094 21.8595 37.6094 C 23.1016 37.6094 23.9220 36.7656 23.9220 35.5469 C 23.9220 34.9375 23.7344 34.4922 23.3595 34.1172 L 16.6095 27.5313 L 12.1563 23.7344 L 17.6641 23.9687 L 33.7422 23.9687 C 41.7344 23.9687 45.9766 28.375 45.9766 34.6797 C 45.9766 41.0078 41.7344 45.6953 33.7422 45.6953 L 28.3516 45.6953 C 27.0626 45.6953 26.2188 46.6328 26.2188 47.7813 C 26.2188 48.9297 27.0626 49.8672 28.3516 49.8672 L 33.7657 49.8672 C 44.2657 49.8672 50.1484 43.8906 50.1484 34.9140 Z"
  }));
}

var _default = ArrowUturnLeft;
exports["default"] = _default;