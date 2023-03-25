"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquareArrowRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M35.8906,20.9883 C35.8906,21.4805 35.7266,21.8789 35.2578,22.3477 L27.6172,30.2695 C27.2656,30.6211 26.8906,30.8321 26.375,30.8321 C25.4141,30.8321 24.7344,30.1289 24.7344,29.1445 C24.7344,28.6758 24.9219,28.1836 25.2969,27.8555 L29.0703,24.293 L30.7344,22.6992 L27.2422,22.8633 L2.5156,22.8633 C1.5313,22.8633 0.7109,21.9961 0.7109,20.9883 C0.7109,19.9805 1.5313,19.1367 2.5156,19.1367 L27.2422,19.1367 L30.7344,19.2774 L29.0703,17.6836 L25.2969,14.1445 C24.9219,13.8164 24.7344,13.3242 24.7344,12.8789 C24.7344,11.8945 25.4141,11.168 26.375,11.168 C26.8906,11.168 27.2656,11.3555 27.6172,11.707 L35.2578,19.6289 C35.7266,20.0977 35.8906,20.5195 35.8906,20.9883 Z M51.2891,34.4414 C51.2891,39.3164 48.875,41.8008 44.0234,41.8008 L19.836,41.8008 C15.0078,41.8008 12.5703,39.3164 12.5703,34.4414 L12.5703,27.668 L16.3438,27.668 L16.3438,34.3711 C16.3438,36.7148 17.6094,38.0274 20.0469,38.0274 L43.8359,38.0274 C46.2734,38.0274 47.5156,36.7148 47.5156,34.3711 L47.5156,7.6055 C47.5156,5.3086 46.2734,3.9726 43.8359,3.9726 L20.0469,3.9726 C17.6094,3.9726 16.3438,5.3086 16.3438,7.6055 L16.3438,14.3086 L12.5703,14.3086 L12.5703,7.5586 C12.5703,2.6367 15.0078,0.1992 19.836,0.1992 L44.0234,0.1992 C48.8516,0.1992 51.2891,2.6367 51.2891,7.5586 L51.2891,34.4414 Z",
    transform: "translate(2 7)"
  }));
}

var _default = SquareArrowRight;
exports["default"] = _default;