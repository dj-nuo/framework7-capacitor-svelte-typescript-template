function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Bold(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 18.0273 44.7578 L 30.2617 44.7578 C 37.4102 44.7578 41.9336 40.9844 41.9336 35.1953 C 41.9336 30.6250 38.6524 27.3203 33.8711 27.0625 L 33.8711 26.8750 C 37.7617 26.3359 40.4102 23.4063 40.4102 19.6797 C 40.4102 14.4531 36.4258 11.2422 29.9102 11.2422 L 18.0273 11.2422 C 15.5195 11.2422 14.0664 12.7188 14.0664 15.2968 L 14.0664 40.7266 C 14.0664 43.2812 15.5195 44.7578 18.0273 44.7578 Z M 21.8008 25.1641 L 21.8008 16.7500 L 27.5664 16.7500 C 30.8476 16.7500 32.7929 18.2500 32.7929 20.8281 C 32.7929 23.5469 30.6367 25.1641 26.9805 25.1641 Z M 21.8008 39.3437 L 21.8008 30.0390 L 27.6836 30.0390 C 31.8086 30.0390 34.0820 31.6328 34.0820 34.6328 C 34.0820 37.7031 31.8789 39.3437 27.8476 39.3437 Z"
  }));
}

export default Bold;