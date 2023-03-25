"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Alarm(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 8.7343 13.4688 C 9.0858 13.4688 9.3436 13.4219 9.6718 13.1641 L 17.5234 7.2344 C 17.9218 6.9532 18.1327 6.5781 18.1327 6.1797 C 18.1327 5.6875 17.8983 5.2891 17.4999 4.9141 C 16.6093 4.1172 15.0155 3.6719 13.6093 3.6719 C 9.9296 3.6719 7.0234 6.6016 7.0234 10.2578 C 7.0234 11.1250 7.1640 11.9922 7.3983 12.5313 C 7.6562 13.1172 8.1718 13.4688 8.7343 13.4688 Z M 47.2421 13.4688 C 47.8280 13.4688 48.2968 13.0937 48.5780 12.5313 C 48.8358 12.0157 48.9765 11.1250 48.9765 10.2578 C 48.9765 6.6016 46.0468 3.6719 42.3671 3.6719 C 40.9843 3.6719 39.3905 4.1172 38.4999 4.9141 C 38.1014 5.2891 37.8671 5.6875 37.8671 6.1797 C 37.8671 6.5781 38.0780 6.9532 38.4530 7.2344 L 46.3046 13.1641 C 46.6327 13.4219 46.8905 13.4688 47.2421 13.4688 Z M 8.3827 51.6016 C 9.1093 52.3281 10.2577 52.3281 10.9843 51.5781 L 14.6874 47.8985 C 18.4140 50.6406 23.0077 52.2813 27.9999 52.2813 C 32.9921 52.2813 37.5858 50.6406 41.3124 47.8985 L 45.0155 51.5781 C 45.7421 52.3281 46.8905 52.3281 47.5936 51.6016 C 48.2733 50.9219 48.2968 49.7735 47.5702 49.0703 L 44.0077 45.5313 C 47.9687 41.5 50.4063 35.9688 50.4063 29.8750 C 50.4063 17.5000 40.3749 7.4453 27.9999 7.4453 C 15.6249 7.4453 5.5937 17.5000 5.5937 29.8750 C 5.5937 35.9688 8.0312 41.5 11.9687 45.5313 L 8.4062 49.0703 C 7.7030 49.7735 7.7030 50.9219 8.3827 51.6016 Z M 27.9999 48.2735 C 17.8280 48.2735 9.5780 40.0469 9.5780 29.8750 C 9.5780 19.7266 17.8280 11.4766 27.9999 11.4766 C 38.1483 11.4766 46.3749 19.7266 46.3749 29.8750 C 46.3749 40.0469 38.1483 48.2735 27.9999 48.2735 Z M 17.3358 32.4532 L 27.9765 32.4532 C 28.8905 32.4532 29.6171 31.7500 29.6171 30.8359 L 29.6171 16.6328 C 29.6171 15.7188 28.8905 14.9922 27.9765 14.9922 C 27.0624 14.9922 26.3593 15.7188 26.3593 16.6328 L 26.3593 29.1953 L 17.3358 29.1953 C 16.3983 29.1953 15.6952 29.9219 15.6952 30.8359 C 15.6952 31.7500 16.3983 32.4532 17.3358 32.4532 Z"
  }));
}

var _default = Alarm;
exports["default"] = _default;