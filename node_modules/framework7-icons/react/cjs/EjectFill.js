"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function EjectFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 46.8790 32.5000 C 48.7307 32.5000 49.7852 31.5156 49.7852 29.8750 C 49.7852 29.1015 49.4104 28.2813 48.7542 27.5781 L 30.8477 7.8203 C 30.0509 6.9531 29.1368 6.3672 27.9650 6.3672 C 26.8399 6.3672 25.8790 7.0000 25.1056 7.8203 L 7.1759 27.5781 C 6.5196 28.2813 6.1446 29.1015 6.1681 29.8750 C 6.1915 31.5156 7.1993 32.5000 9.0743 32.5000 Z M 45.8477 37.7969 L 10.1524 37.7969 C 7.3165 37.7969 5.7228 39.2734 5.7228 42.0625 L 5.7228 45.3437 C 5.7228 48.1328 7.3165 49.6328 10.1524 49.6328 L 45.8477 49.6328 C 48.6601 49.6328 50.2772 48.1562 50.2772 45.3437 L 50.2772 42.0625 C 50.2772 39.2500 48.6601 37.7969 45.8477 37.7969 Z"
  }));
}

var _default = EjectFill;
exports["default"] = _default;