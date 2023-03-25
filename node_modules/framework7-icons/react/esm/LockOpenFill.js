function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function LockOpenFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 40.3163 3.2969 C 33.7070 3.2969 27.3320 7.8438 27.3320 17.5234 L 27.3320 24.9063 L 7.2460 24.9063 C 4.1288 24.9063 2.6757 26.3828 2.6757 29.7344 L 2.6757 47.8750 C 2.6757 51.2266 4.1288 52.7031 7.2460 52.7031 L 30.8242 52.7031 C 33.9413 52.7031 35.3944 51.2266 35.3944 47.8750 L 35.3944 29.7344 C 35.3944 26.5000 34.0351 25.0234 31.1054 24.9297 L 31.1054 17.0313 C 31.1054 10.3750 35.4179 6.8828 40.3163 6.8828 C 45.2382 6.8828 49.5505 10.3750 49.5505 17.0313 L 49.5505 22.4219 C 49.5505 24.0860 50.3708 24.7891 51.4489 24.7891 C 52.4804 24.7891 53.3243 24.1563 53.3243 22.4922 L 53.3243 17.5234 C 53.3243 7.8438 46.9259 3.2969 40.3163 3.2969 Z"
  }));
}

export default LockOpenFill;