"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MusicNote2(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M37.7462,35.9835199 C37.7462,42.8742199 32.4962,45.4757199 29.0274,45.4757199 C25.0665,45.4757199 22.2306,42.8976199 22.2306,39.2413199 C22.2306,35.6554199 24.4571,33.1945199 29.2384,32.2101199 L32.965,31.4132199 C33.9259,31.2257199 34.4181,30.5226199 34.4181,29.4445199 L34.3314519,13.3943005 L17,16.9445199 C15.9453,17.1554199 15.7578,17.3663199 15.7578,18.5382199 L15.7578,39.9835199 C15.7578,46.8742199 10.5078,49.4757199 7.039,49.4757199 C3.0781,49.4757199 0.2422,46.8976199 0.2422,43.2413199 C0.2422,39.6554199 2.4687,37.1945199 7.25,36.2101199 L10.9766,35.4132199 C11.9375,35.2257199 12.4297,34.5226199 12.4297,33.4445199 L12.289,7.38201989 C12.289,5.97571989 13.1562,5.13201989 14.75,4.78041989 L35.4141,0.577294863 C36.6797,0.296094863 37.7578,1.16319486 37.7578,2.47569486 L37.7578,11.3116949 C37.7578,11.3816056 37.753885,11.4503251 37.7462,11.5176647 L37.7462,35.9835199 Z",
    transform: "translate(9 3)"
  }));
}

var _default = MusicNote2;
exports["default"] = _default;