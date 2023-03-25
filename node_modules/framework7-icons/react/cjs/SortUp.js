"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SortUp(props) {
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
    d: "M9.19949503,0 C9.71306619,0 10.1814257,0.193574007 10.5355923,0.511740723 L10.7142137,0.686291508 L17.7852816,7.75735939 C18.5663301,8.53840798 18.5663301,9.80473795 17.7852816,10.5857865 C17.004233,11.3668351 15.737903,11.3668351 14.9568544,10.5857865 L11.1994951,6.82842719 L11.1994951,34 C11.1994951,35.1045699 10.3040645,36 9.19949503,36 C8.09492552,36 7.19949501,35.1045699 7.19949501,34 L7.19949501,6.80050513 L3.4142136,10.5857865 C2.63316501,11.3668351 1.36683504,11.3668351 0.585786444,10.5857865 C-0.195262148,9.80473795 -0.195262148,8.53840798 0.585786444,7.75735939 L7.65685433,0.686291508 L7.77820657,0.574417287 L7.77820657,0.574417287 L7.90617774,0.474386914 C8.25487784,0.178487775 8.70634241,0 9.19949503,0 Z M41,30 C42.1045695,30 43,30.8954305 43,32 C43,33.1045695 42.1045695,34 41,34 L17,34 C15.8954305,34 15,33.1045695 15,32 C15,30.8954305 15.8954305,30 17,30 L41,30 Z M33,22 C34.1045695,22 35,22.8954305 35,24 C35,25.1045695 34.1045695,26 33,26 L17,26 C15.8954305,26 15,25.1045695 15,24 C15,22.8954305 15.8954305,22 17,22 L33,22 Z M25,14 C26.1045695,14 27,14.8954305 27,16 C27,17.1045695 26.1045695,18 25,18 L17,18 C15.8954305,18 15,17.1045695 15,16 C15,14.8954305 15.8954305,14 17,14 L25,14 Z",
    transform: "translate(6 10)"
  }));
}

var _default = SortUp;
exports["default"] = _default;