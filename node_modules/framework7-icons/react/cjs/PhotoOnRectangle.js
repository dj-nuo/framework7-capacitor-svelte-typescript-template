"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PhotoOnRectangle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6.6505 42.2994 L 10.5900 42.2994 L 10.5900 45.9424 C 10.5900 50.3055 12.7927 52.5082 17.2405 52.5082 L 49.3495 52.5082 C 53.7548 52.5082 56 50.3055 56 45.9424 L 56 23.4281 C 56 19.0861 53.7548 16.8834 49.3495 16.8834 L 45.4100 16.8834 L 45.4100 13.4523 C 45.4100 9.0892 43.1861 6.8865 38.7803 6.8865 L 6.6505 6.8865 C 2.2239 6.8865 0 9.0892 0 13.4523 L 0 35.7548 C 0 40.1179 2.2239 42.2994 6.6505 42.2994 Z M 6.7141 38.8894 C 4.5961 38.8894 3.4100 37.7669 3.4100 35.5642 L 3.4100 13.6429 C 3.4100 11.4402 4.5961 10.2964 6.7141 10.2964 L 38.7170 10.2964 C 40.8138 10.2964 41.9998 11.4402 41.9998 13.6429 L 41.9998 16.8834 L 17.2405 16.8834 C 12.7927 16.8834 10.5900 19.0650 10.5900 23.4281 L 10.5900 38.8894 Z M 14.0000 23.6187 C 14.0000 21.4160 15.1649 20.2934 17.2829 20.2934 L 49.2857 20.2934 C 51.3826 20.2934 52.5897 21.4160 52.5897 23.6187 L 52.5897 41.3040 L 44.8166 33.9757 C 43.9062 33.1073 42.7836 32.6837 41.6397 32.6837 C 40.4538 32.6837 39.4371 33.0861 38.4416 33.9545 L 28.9319 42.3841 L 25.1407 38.9530 C 24.2511 38.1693 23.2768 37.7457 22.2601 37.7457 C 21.3282 37.7457 20.4598 38.1270 19.5491 38.9318 L 14.0000 43.7608 Z M 25.4795 34.5052 C 28.2117 34.5052 30.4568 32.2601 30.4568 29.4855 C 30.4568 26.7745 28.2117 24.4871 25.4795 24.4871 C 22.7261 24.4871 20.4811 26.7745 20.4811 29.4855 C 20.4811 32.2601 22.7261 34.5052 25.4795 34.5052 Z"
  }));
}

var _default = PhotoOnRectangle;
exports["default"] = _default;