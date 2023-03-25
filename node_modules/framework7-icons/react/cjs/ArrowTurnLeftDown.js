"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowTurnLeftDown(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 41.3476 5.8633 C 30.4961 5.8633 25.3867 10.1758 25.3867 21.0742 L 25.3867 37.3164 L 25.5742 43.6680 L 20.8867 38.5352 L 13.2226 30.8476 C 12.8476 30.4727 12.2852 30.2851 11.7226 30.2851 C 10.5742 30.2851 9.7070 31.1758 9.7070 32.3242 C 9.7070 32.8867 9.9179 33.3789 10.3633 33.8476 L 25.9258 49.4336 C 26.3711 49.9024 26.9101 50.1367 27.4726 50.1367 C 28.0586 50.1367 28.5976 49.9024 29.0430 49.4336 L 44.6054 33.8476 C 45.0508 33.3789 45.2617 32.8867 45.2617 32.3242 C 45.2617 31.1758 44.3945 30.2851 43.2226 30.2851 C 42.6836 30.2851 42.1211 30.4727 41.7461 30.8476 L 34.0586 38.5352 L 29.3711 43.6914 L 29.5820 37.3164 L 29.5586 21.2851 C 29.5352 12.8008 33.2148 9.9649 41.5586 9.9649 C 42.6367 9.9649 43.4101 10.0117 44.2070 10.0117 C 45.4023 10.0117 46.2930 9.2383 46.2930 8.0195 C 46.2930 6.8242 45.4492 6.2149 44.5352 6.0273 C 43.8320 5.9102 42.6836 5.8633 41.3476 5.8633 Z"
  }));
}

var _default = ArrowTurnLeftDown;
exports["default"] = _default;