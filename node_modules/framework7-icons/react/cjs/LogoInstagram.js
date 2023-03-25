"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LogoInstagram(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M36.0057262,0 C43.7345502,0 50,6.26927476 50,13.9942738 L50,36.0057262 C50,43.7345502 43.7307252,50 36.0057262,50 L13.9942738,50 C6.26544981,50 0,43.7307252 0,36.0057262 L0,13.9942738 C0,6.26544981 6.26927476,0 13.9942738,0 L36.0057262,0 Z M25,12 C17.8202983,12 12,17.8202983 12,25 C12,32.1797017 17.8202983,38 25,38 C32.1797017,38 38,32.1797017 38,25 C38,17.8202983 32.1797017,12 25,12 Z M25,16 C29.9705627,16 34,20.0294373 34,25 C34,29.9705627 29.9705627,34 25,34 C20.0294373,34 16,29.9705627 16,25 C16,20.0294373 20.0294373,16 25,16 Z M39.5,7 C37.5670034,7 36,8.56700338 36,10.5 C36,12.4329966 37.5670034,14 39.5,14 C41.4329966,14 43,12.4329966 43,10.5 C43,8.56700338 41.4329966,7 39.5,7 Z",
    transform: "translate(3 3)"
  }));
}

var _default = LogoInstagram;
exports["default"] = _default;