"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowshapeTurnUpRightCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 29.8749 37.7969 C 29.0312 37.7969 28.4218 37.1875 28.4218 36.3438 L 28.4218 31.5156 L 28.0468 31.5156 C 23.1483 31.5156 20.0546 32.7344 17.8749 36.8594 C 17.4530 37.6562 16.8671 37.7969 16.3280 37.7969 C 15.6718 37.7969 15.0390 37.2109 15.0390 36.1328 C 15.0390 26.7813 18.9999 21.0391 28.0468 21.0391 L 28.4218 21.0391 L 28.4218 16.2344 C 28.4218 15.4140 29.0312 14.7109 29.8983 14.7109 C 30.5312 14.7109 30.9296 14.9922 31.5858 15.6016 L 41.5468 24.9062 C 42.0390 25.3516 42.1796 25.8203 42.1796 26.2656 C 42.1796 26.6875 42.0155 27.1562 41.5468 27.6016 L 31.5858 36.9766 C 30.9999 37.5156 30.5077 37.7969 29.8749 37.7969 Z"
  }));
}

var _default = ArrowshapeTurnUpRightCircleFill;
exports["default"] = _default;