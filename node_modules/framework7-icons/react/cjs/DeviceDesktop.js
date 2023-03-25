"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DeviceDesktop(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M31,36 C29.5433188,37.9469971 29.2099854,39.6315087 30,41.0535349 C30.664682,42.2499625 32.1858846,42.8990566 34.5636079,43.0008172 C35.3666509,43.0351872 36,43.6962218 36,44.5 C36,45.3284271 35.3284271,46 34.5,46 L15.5,46 C14.6715729,46 14,45.3284271 14,44.5 C14,43.7096597 14.6364739,43.0667406 15.4267741,43.0587779 C17.7420055,43.0354582 19.2664141,42.3635672 20,41.0431125 C20.8749705,39.4681657 20.5416372,37.7871282 19,36 L4.16666667,36 C1.86548021,36 0,34.209139 0,32 L0,4 C0,1.790861 1.86548021,0 4.16666667,0 L45.8333333,0 C48.1345198,0 50,1.790861 50,4 L50,32 C50,34.209139 48.1345198,36 45.8333333,36 L31,36 Z M4.16666667,6 L4.16666667,28 C4.16666667,29.1045695 5.06209717,30 6.16666667,30 L43.8333333,30 C44.9379028,30 45.8333333,29.1045695 45.8333333,28 L45.8333333,6 C45.8333333,4.8954305 44.9379028,4 43.8333333,4 L6.16666667,4 C5.06209717,4 4.16666667,4.8954305 4.16666667,6 Z M23,32 C22.4477153,32 22,32.4477153 22,33 C22,33.5522847 22.4477153,34 23,34 L27,34 C27.5522847,34 28,33.5522847 28,33 C28,32.4477153 27.5522847,32 27,32 L23,32 Z",
    transform: "translate(3 5)"
  }));
}

var _default = DeviceDesktop;
exports["default"] = _default;