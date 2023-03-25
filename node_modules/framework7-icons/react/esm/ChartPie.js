function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ChartPie(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 17.3828 16.2343 8.7812 26.6640 8.1250 L 26.6640 28.3281 C 26.6640 28.8437 26.8046 29.2656 27.2265 29.6875 L 40.9843 43.1406 C 37.5155 46.1406 32.9687 47.9219 27.9999 47.9219 Z M 29.8046 25.9609 L 29.8046 8.1719 C 36.1562 8.7344 41.6171 12.25 44.8280 17.3594 Z M 31.1405 28.8437 L 46.3046 20.1250 C 47.3358 22.5390 47.9219 25.2109 47.9219 28 C 47.9219 32.9219 46.1874 37.3750 43.2812 40.8437 Z"
  }));
}

export default ChartPie;