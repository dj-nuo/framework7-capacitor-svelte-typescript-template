function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CircleRighthalfFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 28.0117 51.2734 C 40.7382 51.2734 51.2852 40.7266 51.2852 28 C 51.2852 15.2968 40.7148 4.7266 27.9882 4.7266 C 15.2617 4.7266 4.7148 15.2968 4.7148 28 C 4.7148 40.7266 15.2851 51.2734 28.0117 51.2734 Z M 28.0117 47.3125 C 17.3007 47.3125 8.6991 38.7109 8.6991 28 C 8.6991 17.3125 17.2773 8.7109 27.9882 8.7109 Z"
  }));
}

export default CircleRighthalfFill;