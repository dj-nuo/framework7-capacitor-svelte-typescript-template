function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function FlagCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 18.9296 40.7969 C 18.3436 40.7969 17.8280 40.2813 17.8280 39.7187 L 17.8280 19.8203 C 17.8280 18.8125 18.3202 18.0625 19.2812 17.6406 C 20.1249 17.2656 20.8514 17.0547 22.6562 17.0547 C 26.8983 17.0547 29.5468 19.1406 33.5312 19.1406 C 35.4530 19.1406 36.4609 18.6484 37.0702 18.6484 C 37.8671 18.6484 38.4765 19.1406 38.4765 19.8203 L 38.4765 31.3750 C 38.4765 32.4297 38.0312 33.1094 37.0234 33.5547 C 36.1562 33.9531 35.4062 34.1640 33.6483 34.1640 C 29.5702 34.1640 26.9687 32.1016 22.7733 32.1016 C 21.3436 32.1016 20.4062 32.3828 19.9843 32.5703 L 19.9843 39.7187 C 19.9843 40.3047 19.5390 40.7969 18.9296 40.7969 Z"
  }));
}

export default FlagCircleFill;