"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ChevronRight2(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 29.1485 48.3555 C 29.7579 48.3555 30.2735 48.1211 30.6720 47.7226 L 49.2577 29.5820 C 49.7032 29.1367 49.9374 28.5976 49.9374 28.0117 C 49.9374 27.4023 49.6796 26.8164 49.2347 26.4414 L 30.6720 8.2773 C 30.2735 7.8789 29.7579 7.6445 29.1485 7.6445 C 27.9298 7.6445 27.0157 8.5820 27.0157 9.8007 C 27.0157 10.3633 27.2501 10.9258 27.6251 11.3242 L 44.6876 28.0117 L 27.6251 44.6992 C 27.2501 45.0976 27.0157 45.6367 27.0157 46.2226 C 27.0157 47.4414 27.9298 48.3555 29.1485 48.3555 Z M 8.2189 48.3555 C 8.8048 48.3555 9.3438 48.1211 9.7423 47.7226 L 28.3048 29.5820 C 28.7501 29.1367 28.9845 28.5976 28.9845 28.0117 C 28.9845 27.4023 28.7501 26.8164 28.3048 26.4414 L 9.7423 8.2773 C 9.3204 7.8789 8.8048 7.6445 8.2189 7.6445 C 7.0001 7.6445 6.0626 8.5820 6.0626 9.8007 C 6.0626 10.3633 6.3204 10.9258 6.6954 11.3242 L 23.7345 28.0117 L 6.6954 44.6992 C 6.3204 45.0976 6.0626 45.6367 6.0626 46.2226 C 6.0626 47.4414 7.0001 48.3555 8.2189 48.3555 Z"
  }));
}

var _default = ChevronRight2;
exports["default"] = _default;