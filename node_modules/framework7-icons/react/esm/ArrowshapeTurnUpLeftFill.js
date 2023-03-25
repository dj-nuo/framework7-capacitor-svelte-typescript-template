function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowshapeTurnUpLeftFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 25.6563 49.5039 C 27.2266 49.5039 28.3985 48.3320 28.3985 46.7617 L 28.3985 37.8086 L 29.0782 37.8086 C 38.1485 37.8086 43.8907 40.1055 47.9687 47.7695 C 48.7891 49.2695 49.8671 49.5039 50.8516 49.5039 C 52.1174 49.5039 53.2655 48.3789 53.2655 46.3633 C 53.2655 29.0429 45.9298 18.2383 29.0782 18.2383 L 28.3985 18.2383 L 28.3985 9.3789 C 28.3985 7.8086 27.2266 6.4961 25.6095 6.4961 C 24.4376 6.4961 23.7344 7.0820 22.4220 8.1836 L 3.9298 25.4805 C 3.0626 26.3477 2.7345 27.2148 2.7345 28.0117 C 2.7345 28.7851 3.0626 29.6524 3.9298 30.5195 L 22.4220 47.9805 C 23.5939 48.9883 24.4844 49.5039 25.6563 49.5039 Z"
  }));
}

export default ArrowshapeTurnUpLeftFill;