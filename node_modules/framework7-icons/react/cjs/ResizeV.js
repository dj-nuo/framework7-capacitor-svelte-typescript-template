"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ResizeV(props) {
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
    d: "M11.1994949,6.82842712 L11.1994949,43.1715729 L14.9568542,39.4142136 C15.7379028,38.633165 17.0042328,38.633165 17.7852814,39.4142136 C18.56633,40.1952621 18.56633,41.4615921 17.7852814,42.2426407 L10.7142136,49.3137085 C10.697338,49.330584 10.680236,49.3470949 10.6629172,49.3632412 C10.2978091,49.7550079 9.77726249,50 9.19949494,50 C8.70634232,50 8.25487776,49.8215122 7.90617766,49.5256131 C7.81882166,49.4628741 7.73538501,49.3922393 7.65685425,49.3137085 L0.585786438,42.2426407 C-0.195262146,41.4615921 -0.195262146,40.1952621 0.585786438,39.4142136 C1.36683502,38.633165 2.63316498,38.633165 3.41421356,39.4142136 L7.19949494,43.1994949 L7.19949494,6.80050506 L3.41421356,10.5857864 C2.63316498,11.366835 1.36683502,11.366835 0.585786438,10.5857864 C-0.195262146,9.80473785 -0.195262146,8.5384079 0.585786438,7.75735931 L7.65685425,0.686291501 C7.73538501,0.607760738 7.81882166,0.537125874 7.90617766,0.474386909 C8.25487776,0.178487773 8.70634232,0 9.19949494,0 C9.77726249,0 10.2978091,0.2449921 10.6629172,0.63675879 C10.680236,0.652905077 10.697338,0.669415981 10.7142136,0.686291501 L17.7852814,7.75735931 C18.56633,8.5384079 18.56633,9.80473785 17.7852814,10.5857864 C17.0042328,11.366835 15.7379028,11.366835 14.9568542,10.5857864 L11.1994949,6.82842712 Z",
    transform: "translate(19 3)"
  }));
}

var _default = ResizeV;
exports["default"] = _default;