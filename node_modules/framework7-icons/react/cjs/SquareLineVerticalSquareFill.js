"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquareLineVerticalSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 26.6796 12.5790 L 26.6796 47.8866 C 26.6796 48.5920 27.2946 49.1527 28 49.1527 C 28.7054 49.1527 29.3385 48.5920 29.3385 47.8866 L 29.3385 12.5790 C 29.3385 11.8736 28.7054 11.3310 28 11.3310 C 27.2946 11.3310 26.6796 11.8736 26.6796 12.5790 Z M 4.1602 40.8323 L 17.0388 40.8323 C 19.8062 40.8323 21.1990 39.4938 21.1990 36.7082 L 21.1990 23.7392 C 21.1990 20.9899 19.8062 19.6333 17.0388 19.6333 L 4.1602 19.6333 C 1.3927 19.6333 0 20.9899 0 23.7392 L 0 36.7082 C 0 39.4938 1.3927 40.8323 4.1602 40.8323 Z M 38.9613 40.8323 L 51.8400 40.8323 C 54.6071 40.8323 56 39.4938 56 36.7082 L 56 23.7392 C 56 20.9899 54.6071 19.6333 51.8400 19.6333 L 38.9613 19.6333 C 36.1937 19.6333 34.8009 20.9899 34.8009 23.7392 L 34.8009 36.7082 C 34.8009 39.4938 36.1937 40.8323 38.9613 40.8323 Z M 4.3773 38.1010 C 3.3101 38.1010 2.7313 37.5584 2.7313 36.4369 L 2.7313 24.0467 C 2.7313 22.9072 3.3101 22.3646 4.3773 22.3646 L 16.8217 22.3646 C 17.8889 22.3646 18.4677 22.9072 18.4677 24.0467 L 18.4677 36.4369 C 18.4677 37.5584 17.8889 38.1010 16.8217 38.1010 Z"
  }));
}

var _default = SquareLineVerticalSquareFill;
exports["default"] = _default;