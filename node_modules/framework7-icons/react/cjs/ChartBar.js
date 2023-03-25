"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ChartBar(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 44.8485 49.4564 L 50.7991 49.4564 C 54.2370 49.4564 56.0000 47.8035 56.0000 44.5418 L 56.0000 13.0706 C 56.0000 9.8089 54.2370 8.1339 50.7991 8.1339 L 44.8485 8.1339 C 41.4105 8.1339 39.6475 9.8089 39.6475 13.0706 L 39.6475 44.5418 C 39.6475 47.8035 41.4105 49.4564 44.8485 49.4564 Z M 45.4438 46.1285 C 43.7467 46.1285 43.1518 45.5555 43.1518 43.9026 L 43.1518 13.7097 C 43.1518 12.0347 43.7467 11.4618 45.4438 11.4618 L 50.2259 11.4618 C 51.9008 11.4618 52.4962 12.0347 52.4962 13.7097 L 52.4962 43.9026 C 52.4962 45.5555 51.9008 46.1285 50.2259 46.1285 Z M 25.0139 49.4564 L 30.9643 49.4564 C 34.4023 49.4564 36.1875 47.8035 36.1875 44.5418 L 36.1875 19.5058 C 36.1875 16.2441 34.4023 14.5692 30.9643 14.5692 L 25.0139 14.5692 C 21.5758 14.5692 19.8348 16.2441 19.8348 19.5058 L 19.8348 44.5418 C 19.8348 47.8035 21.5758 49.4564 25.0139 49.4564 Z M 25.6089 46.1285 C 23.9340 46.1285 23.3389 45.5555 23.3389 43.9026 L 23.3389 20.1450 C 23.3389 18.4700 23.9340 17.8970 25.6089 17.8970 L 30.3913 17.8970 C 32.0883 17.8970 32.6833 18.4700 32.6833 20.1450 L 32.6833 43.9026 C 32.6833 45.5555 32.0883 46.1285 30.3913 46.1285 Z M 5.2011 49.4564 L 11.1515 49.4564 C 14.5896 49.4564 16.3526 47.8035 16.3526 44.5418 L 16.3526 25.9191 C 16.3526 22.6574 14.5896 20.9824 11.1515 20.9824 L 5.2011 20.9824 C 1.7631 20.9824 0 22.6574 0 25.9191 L 0 44.5418 C 0 47.8035 1.7631 49.4564 5.2011 49.4564 Z M 5.7962 46.1285 C 4.0992 46.1285 3.5041 45.5555 3.5041 43.9026 L 3.5041 26.5582 C 3.5041 24.8833 4.0992 24.3103 5.7962 24.3103 L 10.5786 24.3103 C 12.2535 24.3103 12.8485 24.8833 12.8485 26.5582 L 12.8485 43.9026 C 12.8485 45.5555 12.2535 46.1285 10.5786 46.1285 Z"
  }));
}

var _default = ChartBar;
exports["default"] = _default;