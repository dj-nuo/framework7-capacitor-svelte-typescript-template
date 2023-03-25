"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MoneyEuro(props) {
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
    d: "M21.6931752,20.9305041 L9.69316725,20.9305041 C11.1349427,25.8793652 15.0831893,28.4446005 20.1183128,28.4446005 C21.7153564,28.4446005 23.5785739,28.3083933 24.4658203,28.0586801 L24.4658203,32.3946089 C23.5120304,32.6670232 21.6709941,32.8486328 20.1183128,32.8486328 C12.4436312,32.8486328 6.25508733,28.7624173 4.56931912,20.9305041 L0,20.9305041 L0,18.3652688 L4.19223938,18.3652688 C4.1256959,17.7523365 4.10351474,17.0940017 4.10351474,16.435667 C4.10351474,15.7546311 4.1256959,15.0962964 4.19223938,14.4606628 L0,14.4606628 L0,11.8954275 L4.56931912,11.8954275 C6.25508733,4.06351436 12.4658123,0 20.0961316,0 C21.6044506,0 23.5342116,0.227011975 24.4436392,0.522127543 L24.4436392,4.83535507 C23.4898492,4.6083431 21.6709941,4.42673352 20.140494,4.42673352 C15.1275516,4.42673352 11.1571239,6.96926764 9.71534841,11.8954275 L21.6931752,11.8954275 L21.6931752,14.4606628 L9.20518171,14.4606628 C9.13863823,15.0962964 9.09427591,15.7546311 9.09427591,16.435667 C9.09427591,17.1167029 9.13863823,17.7523365 9.18300055,18.3652688 L21.6931752,18.3652688 L21.6931752,20.9305041 Z",
    transform: "translate(13 12)"
  }));
}

var _default = MoneyEuro;
exports["default"] = _default;