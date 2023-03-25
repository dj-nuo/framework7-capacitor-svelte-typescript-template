"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowshapeTurnUpLeft2Fill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 31.2092 48.3924 C 32.6403 48.3924 33.6714 47.3402 33.6714 45.9302 L 33.6714 37.8911 L 34.2818 37.8911 C 42.4258 37.8911 47.5818 39.9535 51.2647 46.8351 C 51.9801 48.1819 52.9481 48.3924 53.8532 48.3924 C 54.9686 48.3924 56 47.3823 56 45.5724 C 56 30.0204 49.4127 20.3188 34.2818 20.3188 L 33.6714 20.3188 L 33.6714 12.3639 C 33.6714 10.9539 32.6403 9.7755 31.1671 9.7755 C 30.1359 9.7755 29.5046 10.3016 28.3261 11.2907 L 11.7008 26.8216 C 10.9011 27.5792 10.6275 28.3789 10.6275 29.0945 C 10.6275 29.7889 10.9222 30.5676 11.7008 31.3462 L 28.3261 47.0245 C 29.3783 47.9294 30.1780 48.3924 31.2092 48.3924 Z M 20.5816 48.3924 C 21.9916 48.3924 23.0439 47.5296 23.0439 46.5615 L 23.0439 45.6566 L 9.7016 33.3665 C 8.3968 32.1880 7.6603 30.6728 7.6603 29.0945 C 7.6603 27.5161 8.3547 25.9798 9.7016 24.8014 L 23.0439 12.5954 L 23.0439 11.6905 C 23.0439 10.7014 21.9916 9.7755 20.5396 9.7755 C 19.4874 9.7755 18.8560 10.3016 17.6775 11.2907 L 1.0733 26.8216 C .2736 27.5792 0 28.3789 0 29.0945 C 0 29.7889 .2736 30.5886 1.0733 31.3462 L 17.6775 47.0245 C 18.7298 47.9294 19.5294 48.3924 20.5816 48.3924 Z"
  }));
}

var _default = ArrowshapeTurnUpLeft2Fill;
exports["default"] = _default;