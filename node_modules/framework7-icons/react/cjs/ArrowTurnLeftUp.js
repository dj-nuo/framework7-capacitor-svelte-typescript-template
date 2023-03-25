"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowTurnLeftUp(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 41.3476 50.1367 C 42.6836 50.1367 43.8320 50.1133 44.5352 49.9727 C 45.4492 49.7617 46.2930 49.1758 46.2930 47.9805 C 46.2930 46.7617 45.4023 45.9883 44.2070 45.9883 C 43.4101 45.9883 42.6367 46.0352 41.5586 46.0352 C 33.2148 46.0352 29.5352 43.1992 29.5586 34.7149 L 29.5820 18.6836 L 29.3711 12.3086 L 34.0586 17.4649 L 41.7461 25.1524 C 42.1211 25.5273 42.6836 25.7149 43.2226 25.7149 C 44.3945 25.7149 45.2617 24.8242 45.2617 23.6758 C 45.2617 23.1133 45.0508 22.6211 44.6054 22.1524 L 29.0430 6.5664 C 28.5976 6.0976 28.0586 5.8633 27.4726 5.8633 C 26.9101 5.8633 26.3711 6.0976 25.9258 6.5664 L 10.3633 22.1524 C 9.9179 22.6211 9.7070 23.1133 9.7070 23.6758 C 9.7070 24.8242 10.5742 25.7149 11.7226 25.7149 C 12.2852 25.7149 12.8476 25.5273 13.2226 25.1524 L 20.8867 17.4649 L 25.5742 12.3320 L 25.3867 18.6836 L 25.3867 34.9258 C 25.3867 45.8242 30.4961 50.1367 41.3476 50.1367 Z"
  }));
}

var _default = ArrowTurnLeftUp;
exports["default"] = _default;