"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Hifispeaker(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.6797 7.8555 L 7.6797 48.1445 C 7.6797 53.0664 10.1172 55.5039 14.9453 55.5039 L 41.0547 55.5039 C 45.8828 55.5039 48.3203 53.0664 48.3203 48.1445 L 48.3203 7.8555 C 48.3203 2.9571 45.8828 .4961 41.0547 .4961 L 14.9453 .4961 C 10.1172 .4961 7.6797 2.9571 7.6797 7.8555 Z M 11.4531 7.9024 C 11.4531 5.5586 12.7187 4.2696 15.1562 4.2696 L 40.8438 4.2696 C 43.2813 4.2696 44.5469 5.5586 44.5469 7.9024 L 44.5469 48.0977 C 44.5469 50.3945 43.2813 51.7305 40.8438 51.7305 L 15.1562 51.7305 C 12.7187 51.7305 11.4531 50.3945 11.4531 48.0977 Z M 27.9766 21.0508 C 31.6094 21.0508 34.5625 18.1445 34.5391 14.4883 C 34.5156 10.8555 31.6094 7.9961 27.9766 7.9727 C 24.3438 7.9492 21.4609 10.8555 21.4609 14.4883 C 21.4609 18.1445 24.3438 21.0508 27.9766 21.0508 Z M 28.0000 17.8633 C 26.1484 17.8633 24.625 16.3398 24.625 14.4883 C 24.625 12.6133 26.125 11.1602 28.0000 11.1602 C 29.8047 11.1602 31.3750 12.6367 31.3750 14.4883 C 31.3750 16.3398 29.8516 17.8633 28.0000 17.8633 Z M 28.0000 48.0742 C 34.5391 48.0742 39.8125 42.8008 39.8125 36.2149 C 39.8125 29.6524 34.5391 24.4492 28.0000 24.4024 C 21.4609 24.3789 16.1875 29.6524 16.1875 36.2149 C 16.1875 42.8008 21.4609 48.0742 28.0000 48.0742 Z M 28.0000 41.2305 C 25.2578 41.2305 22.9844 39.0039 22.9844 36.2149 C 22.9844 33.3789 25.2109 31.2227 28.0000 31.2227 C 30.7891 31.2227 33.0156 33.3789 33.0156 36.2149 C 33.0156 39.0039 30.7891 41.2305 28.0000 41.2305 Z"
  }));
}

var _default = Hifispeaker;
exports["default"] = _default;