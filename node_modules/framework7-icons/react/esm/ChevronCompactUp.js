function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ChevronCompactUp(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 8.6055 29.3828 C 7.6914 29.7344 7.1055 30.5313 7.1055 31.3750 C 7.1055 32.7578 8.1133 33.8125 9.4961 33.8125 C 10.1992 33.8125 11.1133 33.4140 11.7226 33.1797 L 28.0117 26.8047 L 44.3008 33.1797 C 44.8867 33.4140 45.8477 33.8125 46.5274 33.8125 C 47.8867 33.8125 48.8945 32.7578 48.8945 31.3750 C 48.8945 30.5313 48.3320 29.7344 47.4179 29.3828 L 31.4336 23.125 C 30.3555 22.7031 29.0430 22.1875 28.0117 22.1875 C 26.9570 22.1875 25.6679 22.7031 24.5899 23.125 Z"
  }));
}

export default ChevronCompactUp;