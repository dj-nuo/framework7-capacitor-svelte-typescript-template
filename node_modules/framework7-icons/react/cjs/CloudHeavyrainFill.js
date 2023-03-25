"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CloudHeavyrainFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 12.2618 36.0976 L 41.3477 36.0976 C 48.7772 36.0976 54.5195 30.4726 54.5195 23.2774 C 54.5195 15.9883 48.5195 10.5274 40.5743 10.5976 C 37.5743 4.5508 32.0665 1.0586 25.5743 1.0586 C 16.9259 1.0586 9.6368 7.8789 8.9571 16.6211 C 4.4102 17.8633 1.4805 21.6836 1.4805 26.3008 C 1.4805 32.1133 5.8399 36.0976 12.2618 36.0976 Z M 8.0665 54.0274 L 14.9337 42.0976 C 15.3790 41.3476 15.1446 40.5508 14.4415 40.1289 C 13.7383 39.7305 12.9415 39.9414 12.4962 40.6680 L 5.6055 52.6445 C 5.2305 53.3242 5.4181 54.1445 6.1212 54.5664 C 6.8243 54.9414 7.6681 54.7070 8.0665 54.0274 Z M 17.3946 54.0274 L 24.2852 42.0976 C 24.7071 41.3476 24.4727 40.5508 23.7930 40.1289 C 23.0665 39.7305 22.2696 39.9414 21.8477 40.6680 L 14.9337 52.6445 C 14.5586 53.3242 14.7462 54.1445 15.4727 54.5664 C 16.1759 54.9414 17.0196 54.7070 17.3946 54.0274 Z M 26.7227 54.0274 L 33.6134 42.0976 C 34.0352 41.3476 33.8008 40.5508 33.1212 40.1289 C 32.3946 39.7305 31.5977 39.9414 31.1759 40.6680 L 24.2618 52.6445 C 23.8868 53.3242 24.0743 54.1445 24.8008 54.5664 C 25.4805 54.9414 26.3477 54.7070 26.7227 54.0274 Z M 36.0040 54.0508 L 42.9181 42.0508 C 43.3399 41.3476 43.1290 40.5039 42.4259 40.1289 C 41.7462 39.7773 40.9259 39.9414 40.5040 40.6445 L 33.6368 52.5976 C 33.2149 53.3242 33.4024 54.1445 34.1055 54.5664 C 34.7618 54.9414 35.6290 54.7070 36.0040 54.0508 Z"
  }));
}

var _default = CloudHeavyrainFill;
exports["default"] = _default;