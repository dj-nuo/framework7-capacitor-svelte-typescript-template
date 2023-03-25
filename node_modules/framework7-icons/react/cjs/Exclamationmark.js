"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Exclamationmark(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.0117 37.3633 C 29.2539 37.3633 30.1211 36.5430 30.1445 35.2773 L 30.3555 7.9727 C 30.3555 6.6367 29.2539 5.7227 27.9883 5.7227 C 26.7461 5.7227 25.6445 6.6367 25.6445 7.9727 L 25.9024 35.2773 C 25.9258 36.5430 26.7929 37.3633 28.0117 37.3633 Z M 27.9883 50.2773 C 29.8633 50.2773 31.3398 48.7773 31.3398 46.9492 C 31.3398 45.0977 29.8633 43.6211 27.9883 43.6211 C 26.1602 43.6211 24.6602 45.0977 24.6602 46.9492 C 24.6602 48.7773 26.1602 50.2773 27.9883 50.2773 Z"
  }));
}

var _default = Exclamationmark;
exports["default"] = _default;