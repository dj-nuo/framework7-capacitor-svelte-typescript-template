"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function EllipsisVerticalCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0.0937,23.9999 C0.0937,10.9218 10.9219,0.0937 24,0.0937 C37.0547,0.0937 47.9063,10.8983 47.9063,23.9765 C47.9063,37.0312 37.0547,47.9063 24,47.9063 C10.9219,47.9063 0.0937,37.0546 0.0937,23.9999 Z M4.0781,23.9999 C4.0781,35.039 12.9375,43.9454 24,43.9219926 C35.0391,43.8983 43.9219,35.0155 43.9219,23.9765 C43.9219,12.914 35.0391,4.1014 24,4.1014 C12.9375,4.1014 4.0781,12.9374 4.0781,23.9999 Z M23.9766,16.2655 C22.2656,16.2655 20.8125,14.8124 20.8125,13.1014 C20.8125,11.3905 22.2656,9.9374 23.9766,9.9374 C25.6875,9.9374 27.1406,11.3671 27.1406,13.1014 C27.1406,14.8124 25.6875,16.2655 23.9766,16.2655 Z M23.9766,27.1405 C22.2656,27.1405 20.8125,25.664 20.8125,23.9765 C20.8125,22.289 22.2656,20.8124 23.9766,20.8124 C25.6875,20.8124 27.1406,22.2421 27.1406,23.9765 C27.1406,25.664 25.6875,27.1405 23.9766,27.1405 Z M23.9766,38.0155 C22.2656,38.0155 20.8125,36.5624 20.8125,34.8514 C20.8125,33.1405 22.2656,31.664 23.9766,31.664 C25.6875,31.664 27.1406,33.1171 27.1406,34.8514 C27.1406,36.5624 25.6875,38.0155 23.9766,38.0155 Z",
    transform: "translate(4 4)"
  }));
}

var _default = EllipsisVerticalCircle;
exports["default"] = _default;