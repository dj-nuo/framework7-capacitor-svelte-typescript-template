function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function FunnelFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M39.9564071,-2.84217094e-14 C42.1655461,-2.84217094e-14 43.9564071,1.790861 43.9564071,4 C43.9564071,4.89444303 43.656621,5.76307841 43.1049452,6.4671254 L29.7253311,23.5421492 C29.1736553,24.2461962 28.8738692,25.1148316 28.8738692,26.0092747 L28.8738692,37.2316232 C28.8738692,39.4407622 27.0830082,41.2316232 24.8738692,41.2316232 C24.4264592,41.2316232 23.9822196,41.156561 23.5596477,41.009562 L18.0809661,39.1037077 C16.4729167,38.5443198 15.3951877,37.0283368 15.3951877,35.3257688 L15.3951877,26.0330028 C15.3951877,25.1240473 15.0856094,24.2421965 14.5174431,23.5326987 L0.87789061,6.50030417 C-0.502989255,4.77593011 -0.224532187,2.25862442 1.49984188,0.877744559 C2.20933973,0.309578224 3.09119051,-2.84217094e-14 4.00014605,-2.84217094e-14 L39.9564071,-2.84217094e-14 Z",
    transform: "translate(6 7)"
  }));
}

export default FunnelFill;