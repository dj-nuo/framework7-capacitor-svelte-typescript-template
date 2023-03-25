function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function EqualSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 18.7304 25.3164 C 17.4648 25.3164 16.5976 24.7071 16.5976 23.4649 C 16.5976 22.1992 17.4179 21.5664 18.7304 21.5664 L 37.2460 21.5664 C 38.5820 21.5664 39.3788 22.1992 39.3788 23.4649 C 39.3788 24.7071 38.5351 25.3164 37.2460 25.3164 Z M 18.7304 34.4336 C 17.4648 34.4336 16.5976 33.8008 16.5976 32.5586 C 16.5976 31.2930 17.4179 30.6602 18.7304 30.6602 L 37.2460 30.6602 C 38.5820 30.6602 39.3788 31.2930 39.3788 32.5586 C 39.3788 33.8008 38.5351 34.4336 37.2460 34.4336 Z"
  }));
}

export default EqualSquareFill;