"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function EyeFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.0103 46.4025 C 44.5562 46.4025 56 33.0170 56 28.8443 C 56 24.6511 44.5354 11.2863 28.0103 11.2863 C 11.5883 11.2863 0 24.6511 0 28.8443 C 0 33.0170 11.6710 46.4025 28.0103 46.4025 Z M 28.0103 40.3501 C 21.5655 40.3501 16.4840 35.1240 16.4426 28.8443 C 16.4220 22.3995 21.5655 17.3387 28.0103 17.3387 C 34.4139 17.3387 39.5574 22.3995 39.5574 28.8443 C 39.5574 35.1240 34.4139 40.3501 28.0103 40.3501 Z M 28.0103 32.9963 C 30.3032 32.9963 32.2036 31.1166 32.2036 28.8443 C 32.2036 26.5515 30.3032 24.6717 28.0103 24.6717 C 25.6968 24.6717 23.7964 26.5515 23.7964 28.8443 C 23.7964 31.1166 25.6968 32.9963 28.0103 32.9963 Z"
  }));
}

var _default = EyeFill;
exports["default"] = _default;