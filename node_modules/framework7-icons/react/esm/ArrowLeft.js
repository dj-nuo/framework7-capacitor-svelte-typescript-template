function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowLeft(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 6.2383 28.0000 C 6.2383 28.5859 6.4961 29.1250 6.9648 29.5703 L 22.5273 45.1094 C 23.0195 45.5547 23.5117 45.7656 24.0508 45.7656 C 25.2227 45.7656 26.1133 44.9219 26.1133 43.7500 C 26.1133 43.1875 25.9024 42.6250 25.5273 42.2734 L 20.3008 36.9297 L 12.3789 29.7344 L 18.0742 30.0859 L 47.6992 30.0859 C 48.9179 30.0859 49.7617 29.2188 49.7617 28.0000 C 49.7617 26.7812 48.9179 25.9141 47.6992 25.9141 L 18.0742 25.9141 L 12.4024 26.2656 L 20.3008 19.0703 L 25.5273 13.7266 C 25.9258 13.3515 26.1133 12.8125 26.1133 12.2500 C 26.1133 11.0781 25.2227 10.2344 24.0508 10.2344 C 23.5117 10.2344 22.9961 10.4219 22.4805 10.9375 L 6.9648 26.4297 C 6.4961 26.8750 6.2383 27.4141 6.2383 28.0000 Z"
  }));
}

export default ArrowLeft;