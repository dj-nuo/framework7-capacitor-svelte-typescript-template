"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function WrenchFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 4.7104 52.3069 C 8.4035 56 13.5066 55.7985 17.5130 51.8145 C 20.7136 48.6139 27.3611 37.3109 33.1357 31.5363 C 36.9854 27.6866 41.2380 29.7234 45.5131 27.9776 L 41.7080 14.1007 C 41.2380 12.3773 41.9318 10.9449 43.9239 10.4077 L 52.3169 8.1695 C 52.0483 7.3861 51.3098 6.3117 50.3922 5.3717 C 45.2220 .2 36.6720 -4.2744e-15 31.5689 4.834542597079431 C 24.1381 11.9297 29.7783 19.4276 24.8767 24.3293 C 18.7216 30.4844 9.7688 34.8265 5.2028 39.4820 C 1.1964 43.5108 .9726 48.5691 4.7104 52.3069 Z M 32.5314 18.3757 C 32.0390 18.5100 31.6360 18.2638 31.4570 17.7266 C 31.3227 17.3238 31.6137 16.8314 32.0837 16.6970 L 37.2988 15.2870 C 37.7240 15.1751 38.2164 15.4436 38.3507 15.9137 C 38.4850 16.4285 38.1940 16.8761 37.7240 17.0104 Z M 47.9976 26.9033 C 48.8479 26.3885 49.7431 25.7170 50.6608 24.8441 C 53.4812 22.2926 54.9357 18.4429 54.3540 15.7123 L 47.5722 17.5699 C 46.8113 17.7714 46.1846 17.8161 45.4682 17.7043 Z M 33.2028 21.0391 C 32.7104 21.1735 32.2852 20.9273 32.1061 20.3901 C 31.9718 19.9872 32.2627 19.4948 32.7328 19.3829 L 37.9478 17.9505 C 38.3731 17.8609 38.8655 18.1071 38.9998 18.5772 C 39.1564 19.0919 38.8431 19.5396 38.3731 19.6738 Z M 33.8519 23.7026 C 33.3818 23.8369 32.9119 23.5907 32.7999 23.0759 C 32.6880 22.6059 32.9566 22.1807 33.4266 22.0464 L 38.6193 20.6587 C 39.1117 20.5020 39.5817 20.7929 39.6936 21.2406 C 39.7832 21.6883 39.5146 22.1807 39.0893 22.2926 Z M 8.2244 48.8154 C 6.7024 47.2933 6.6800 44.7418 8.1796 43.2198 C 9.7016 41.6531 12.2308 41.7202 13.7975 43.1974 C 15.4091 44.7194 15.2524 47.2262 13.7752 48.8154 C 12.3651 50.3597 9.7240 50.3149 8.2244 48.8154 Z"
  }));
}

var _default = WrenchFill;
exports["default"] = _default;