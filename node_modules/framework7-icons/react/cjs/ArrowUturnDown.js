"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUturnDown(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 34.9258 5.7930 C 25.9493 5.7930 19.7852 11.8633 19.7852 22.5742 L 19.7852 38.4179 L 20.0196 43.9023 L 16.2227 39.4726 L 9.6368 32.7226 C 9.2618 32.3476 8.7930 32.1367 8.1836 32.1367 C 6.9883 32.1367 6.1212 32.9805 6.1212 34.2226 C 6.1212 34.7383 6.3790 35.3476 6.7774 35.7461 L 20.3008 49.5273 C 20.7461 49.9961 21.2852 50.2070 21.8712 50.2070 C 22.4336 50.2070 22.9961 49.9961 23.4415 49.5273 L 36.9649 35.7461 C 37.3634 35.3476 37.5977 34.7383 37.5977 34.2226 C 37.5977 32.9805 36.7540 32.1367 35.5352 32.1367 C 34.9493 32.1367 34.4805 32.3476 34.1056 32.7226 L 27.5196 39.4726 L 23.7227 43.9023 L 23.9571 38.4179 L 23.9571 22.1992 C 23.9571 14.2070 28.3634 9.9883 34.6915 9.9883 C 40.9961 9.9883 45.6836 14.2070 45.6836 22.1992 L 45.6836 27.5898 C 45.6836 28.8789 46.6212 29.7226 47.7696 29.7226 C 48.9179 29.7226 49.8788 28.8789 49.8788 27.5898 L 49.8788 22.1992 C 49.8788 11.6992 43.8790 5.7930 34.9258 5.7930 Z"
  }));
}

var _default = ArrowUturnDown;
exports["default"] = _default;