"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowTurnUpLeft(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 47.7928 46.4453 C 49.0352 46.4453 49.5973 45.6484 49.8085 44.6875 C 49.9492 43.9844 49.9962 42.8125 49.9962 41.4531 C 49.9962 30.1094 45.4725 25.2344 34.3397 25.2344 L 17.9803 25.2344 L 12.2382 25.5625 L 20.1132 18.3437 L 25.3163 13.0469 C 25.6913 12.6719 25.9022 12.1328 25.9022 11.5703 C 25.9022 10.3984 24.9882 9.5547 23.8397 9.5547 C 23.2772 9.5547 22.7850 9.7422 22.246 10.2578 L 6.7303 25.7500 C 6.2616 26.1953 6.0038 26.7578 6.0038 27.3203 C 6.0038 27.9062 6.2616 28.4453 6.7303 28.9141 L 22.3163 44.4531 C 22.7850 44.8984 23.2772 45.1094 23.8397 45.1094 C 24.9882 45.1094 25.9022 44.2656 25.9022 43.0937 C 25.9022 42.5312 25.6913 41.9687 25.3163 41.5937 L 20.1132 36.2969 L 12.2147 29.0781 L 17.9803 29.4297 L 34.1288 29.4297 C 42.7538 29.4297 45.7538 32.9688 45.7538 41.6641 C 45.7538 42.7656 45.7069 43.5391 45.7069 44.3594 C 45.7069 45.6016 46.5741 46.4453 47.7928 46.4453 Z"
  }));
}

var _default = ArrowTurnUpLeft;
exports["default"] = _default;