"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function HouseAltFill(props) {
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
    d: "M2.10928641,22 C1.00471691,22 0.109286407,21.1045695 0.109286407,20 C0.109286407,19.3629129 0.412808874,18.7639402 0.92655908,18.38719 L24.836456,0.853265618 C25.5311895,0.343794403 26.4741022,0.336459599 27.1766773,0.83506132 L40,9.93548387 L40,8 C40,6.8954305 40.8954305,6 42,6 L44,6 C45.1045695,6 46,6.8954305 46,8 L46,14.1935484 L51.8835708,18.3689857 C52.7843551,19.008252 52.9963573,20.2567097 52.3570911,21.157494 C51.9820277,21.6859923 51.3741377,22 50.7260768,22 L46,22 L46,44 C46,46.209139 44.209139,48 42,48 L10,48 C7.790861,48 6,46.209139 6,44 L6,22 L2.10928641,22 Z M32,26 L32,42 L40,42 L40,26 L32,26 Z",
    transform: "translate(2 4)"
  }));
}

var _default = HouseAltFill;
exports["default"] = _default;