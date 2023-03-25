function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Sticker(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M44,26 C44,35.9411255 35.9411255,44 26,44 L6,44 C2.6862915,44 0,41.3137085 0,38 L0,6 C0,2.6862915 2.6862915,0 6,0 L38,0 C41.3137085,0 44,2.6862915 44,6 L44,26 Z M38,4 L6,4 C4.9456382,4 4.08183488,4.81587779 4.00548574,5.85073766 L4,6 L4,38 C4,39.0543618 4.81587779,39.9181651 5.85073766,39.9945143 L6,40 L20,40 L20,27.6691973 C20,23.3342831 23.4478378,19.8046544 27.7508207,19.6730041 L28,19.6691973 L40,19.669 L40,6 C40,4.9456382 39.1841222,4.08183488 38.1492623,4.00548574 L38,4 Z M40,23.669 L28,23.6691973 C25.8578046,23.6691973 24.1089211,25.3531658 24.0048953,27.469557 L24,27.6691973 L24,40 L26,40 C33.6275002,40 39.8303269,33.9002476 39.996578,26.312645 L40,26 L40,23.669 Z",
    transform: "translate(6 6)"
  }));
}

export default Sticker;