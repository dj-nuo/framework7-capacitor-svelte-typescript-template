"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function GraphCircleFill(props) {
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
    d: "M0.163604047,26.7913542 L0.897925329,27.2184097 L7.04435811,30.9577146 C8.53686905,31.8657134 10.6076125,31.6070289 11.8267565,30.3568079 L12.9861735,29.1678365 L15.518505,33.0329946 C16.7171103,34.8624545 19.0771612,34.8512561 20.2636842,33.0166452 L25.8099048,24.4410369 L32.1601788,35.3016971 C33.3975613,37.4179508 35.9441454,37.1105051 36.6326149,34.7508872 L43.5640748,10.9944301 L43.7561941,10.364861 C46.434272,14.2372365 48.0030145,18.9354185 48.0030145,24 C48.0030145,37.254834 37.2578485,48 24.0030145,48 C11.6923585,48 1.54656372,38.7311268 0.163604047,26.7913542 L0.163604047,26.7913542 Z M0.039188923,22.670998 C0.728876537,10.0343074 11.1941265,0 24.0030145,0 C30.6650372,0 36.6930735,2.71441815 41.0414759,7.09760695 L40.2727391,10.0341118 L33.9760961,31.6148368 L28.2296318,21.786852 C27.1057494,19.8647137 24.7201151,19.812703 23.5116251,21.6812792 L17.8825323,30.3850253 L15.6230992,26.9363985 C14.5033477,25.2272951 12.2526763,25.0091111 10.8265379,26.4716029 L9.37207422,27.9631419 C9.26946321,28.0683686 8.95604682,28.1075217 8.82633719,28.0286102 L2.6799044,24.2893053 L0.039188923,22.670998 L0.039188923,22.670998 Z",
    transform: "translate(4 4)"
  }));
}

var _default = GraphCircleFill;
exports["default"] = _default;