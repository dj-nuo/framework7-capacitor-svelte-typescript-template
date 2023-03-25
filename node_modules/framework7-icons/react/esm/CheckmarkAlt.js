function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CheckmarkAlt(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M35.6464466,0.646446609 L36.3535534,1.35355339 C37.134602,2.13460197 37.134602,3.40093193 36.3535534,4.18198052 L13.4142136,27.1213203 C12.633165,27.9023689 11.366835,27.9023689 10.5857864,27.1213203 L0.646446609,17.1819805 C-0.134601974,16.4009319 -0.134601974,15.134602 0.646446609,14.3535534 L1.35355339,13.6464466 C2.13460197,12.865398 3.40093193,12.865398 4.18198052,13.6464466 L10.5857864,20.0502525 C11.366835,20.8313011 12.633165,20.8313011 13.4142136,20.0502525 L32.8180195,0.646446609 C33.5990681,-0.134601974 34.865398,-0.134601974 35.6464466,0.646446609 Z",
    transform: "translate(10 14)"
  }));
}

export default CheckmarkAlt;