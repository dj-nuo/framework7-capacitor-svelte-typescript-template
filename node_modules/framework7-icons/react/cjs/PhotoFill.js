"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PhotoFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 17.9335 28.5742 C 14.7460 28.5742 12.1444 25.9727 12.1444 22.7852 C 12.1444 19.6211 14.7460 16.9961 17.9335 16.9961 C 21.0976 16.9961 23.6992 19.6211 23.6992 22.7852 C 23.6992 25.9727 21.0976 28.5742 17.9335 28.5742 Z M 7.7617 45.8008 C 5.5117 45.8008 4.1288 44.4414 4.1288 42.1445 L 4.1288 40.7149 L 11.3241 34.4336 C 12.3554 33.5196 13.4804 33.0508 14.5351 33.0508 C 15.6601 33.0508 16.8554 33.5196 17.8866 34.4805 L 22.3866 38.5118 L 33.5663 28.5742 C 34.7382 27.5430 36.0273 27.0742 37.3398 27.0742 C 38.6288 27.0742 39.9648 27.5664 41.0898 28.5977 L 51.8708 38.5820 L 51.8708 42.1914 C 51.8708 44.4414 50.4649 45.8008 48.2382 45.8008 Z"
  }));
}

var _default = PhotoFill;
exports["default"] = _default;