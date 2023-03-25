function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function LogoWindows(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M0,6.53296704 L18.7987417,3.972773 L18.8069593,22.1056809 L0.0171726113,22.2126832 L0,6.53296704 Z M18.7897868,24.1949451 L18.8043781,42.343656 L0.0145914519,39.760337 L0.0135379175,24.0732091 L18.7897868,24.1949451 Z M21.0686343,3.6378544 L45.9942056,0 L45.9942056,21.8750623 L21.0686343,22.0729424 L21.0686343,3.6378544 Z M46,24.3656176 L45.994153,46.1421745 L21.0685816,42.6242122 L21.033657,24.3248458 L46,24.3656176 Z",
    transform: "translate(5 5)"
  }));
}

export default LogoWindows;