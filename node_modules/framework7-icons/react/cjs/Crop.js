"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Crop(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 20.5586 42.3554 L 38.6524 42.3554 L 38.6524 51.6601 C 38.6524 52.8320 39.4024 53.6289 40.5508 53.6289 C 41.6758 53.6289 42.4258 52.8320 42.4258 51.6601 L 42.4258 42.3554 L 51.8479 42.3554 C 52.9725 42.3554 53.6992 41.6992 53.6992 40.5976 C 53.6992 39.4961 52.9725 38.8398 51.8479 38.8398 L 42.4258 38.8398 L 42.4258 20.5351 C 42.4258 15.8476 40.1758 13.6445 35.4414 13.6445 L 17.3477 13.6445 L 17.3477 4.3398 C 17.3477 3.1679 16.5977 2.3711 15.4726 2.3711 C 14.3242 2.3711 13.5742 3.1679 13.5742 4.3398 L 13.5742 13.6445 L 4.1758 13.6445 C 3.0273 13.6445 2.3008 14.3242 2.3008 15.4023 C 2.3008 16.5273 3.0273 17.1601 4.1758 17.1601 L 13.5742 17.1601 L 13.5742 35.4648 C 13.5742 40.1523 15.8242 42.3554 20.5586 42.3554 Z M 20.8633 38.8398 C 18.4492 38.8398 17.3477 37.5508 17.3477 35.2773 L 17.3477 17.1601 L 35.1367 17.1601 C 37.5508 17.1601 38.6524 18.4726 38.6524 20.7461 L 38.6524 38.8398 Z"
  }));
}

var _default = Crop;
exports["default"] = _default;