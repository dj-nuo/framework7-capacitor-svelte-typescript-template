"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DeleteRightFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 9.9648 49.5742 L 30.3085 49.5508 C 33.0507 49.5508 35.4179 48.7070 37.3398 46.6914 L 51.1679 32.4180 C 52.7149 30.8477 53.3946 29.4180 53.3946 27.9649 C 53.3946 26.4883 52.7149 25.0820 51.1679 23.5118 L 37.3632 9.1680 C 35.4413 7.1289 33.0741 6.4258 30.3319 6.4258 L 9.9648 6.4258 C 5.0898 6.4258 2.6054 8.8398 2.6054 13.6914 L 2.6054 42.3086 C 2.6054 47.1602 5.0898 49.5742 9.9648 49.5742 Z M 15.4257 38.3711 C 14.2773 38.3711 13.3163 37.4336 13.3163 36.2852 C 13.3163 35.7461 13.5507 35.2305 13.9492 34.8086 L 20.7695 27.9649 L 13.9492 21.1445 C 13.5507 20.7227 13.3163 20.2071 13.3163 19.6680 C 13.3163 18.4961 14.2773 17.5352 15.4257 17.5352 C 15.9648 17.5352 16.4804 17.7461 16.9023 18.1680 L 23.7460 25.0118 L 30.5898 18.1680 C 30.9882 17.7461 31.5038 17.5352 32.0429 17.5352 C 33.2148 17.5352 34.1757 18.4961 34.1757 19.6680 C 34.1757 20.2071 33.9413 20.7227 33.5195 21.1445 L 26.6992 27.9649 L 33.5195 34.8086 C 33.9413 35.2305 34.1757 35.7461 34.1757 36.2852 C 34.1757 37.4336 33.2148 38.3711 32.0429 38.3711 C 31.4804 38.3711 30.9882 38.1602 30.6132 37.7852 L 23.7460 30.8945 L 16.8788 37.7852 C 16.4804 38.1602 15.9882 38.3711 15.4257 38.3711 Z"
  }));
}

var _default = DeleteRightFill;
exports["default"] = _default;