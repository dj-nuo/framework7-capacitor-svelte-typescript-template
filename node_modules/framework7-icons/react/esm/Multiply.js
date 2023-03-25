function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Multiply(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.0117 40.0117 C 12.2148 40.8086 12.1914 42.1680 13.0117 42.9883 C 13.8086 43.8086 15.1680 43.7851 15.9883 42.9883 L 27.9883 30.9648 L 40.0117 42.9883 C 40.8086 43.7851 42.1680 43.8086 42.9648 42.9883 C 43.8086 42.1680 43.7851 40.8086 42.9648 40.0117 L 30.9648 27.9883 L 42.9648 15.9883 C 43.7851 15.1914 43.8086 13.8086 42.9648 13.0117 C 42.1680 12.1914 40.8086 12.2148 40.0117 13.0117 L 27.9883 25.0352 L 15.9883 13.0117 C 15.1680 12.2148 13.8086 12.1914 13.0117 13.0117 C 12.1914 13.8086 12.2148 15.1914 13.0117 15.9883 L 25.0117 27.9883 Z"
  }));
}

export default Multiply;