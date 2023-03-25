"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function VideocamFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M36,25 C36,28.8659932 32.8659932,32 29,32 L7,32 C3.13400675,32 0,28.8659932 0,25 L0,7 C0,3.13400675 3.13400675,0 7,0 L29,0 C32.8659932,0 36,3.13400675 36,7 L36,25 Z M45.71066,2.99196205 C47.4436914,2.99196205 48.8599059,4.34841681 48.9555152,6.05753814 L48.96066,6.24196205 L48.96066,25.9014683 C48.96066,26.6666961 48.6906425,27.4073827 48.1981634,27.993077 C47.0857837,29.3160053 45.143496,29.5293645 43.7744003,28.511847 L43.6190513,28.3889718 L38,23.664 L38,8.553 L43.5999096,3.77068042 C44.1295012,3.3183501 44.7887131,3.04945248 45.4793999,3.00019625 L45.71066,2.99196205 Z",
    transform: "translate(3.5 12)"
  }));
}

var _default = VideocamFill;
exports["default"] = _default;