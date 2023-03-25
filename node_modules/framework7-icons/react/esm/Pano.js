function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Pano(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 3.7112 47.4863 C 7.8201 47.4863 14.0498 42.6263 27.9891 42.6263 C 41.9284 42.6263 48.2021 47.4642 52.2888 47.4642 C 54.6970 47.4642 56 45.9841 56 43.5320 L 56 13.5990 C 56 11.1248 54.6970 9.6447 52.2888 9.6447 C 48.2021 9.6447 41.9284 14.5047 27.9891 14.5047 C 14.0718 14.5047 7.7980 9.6447 3.7112 9.6447 C 1.3033 9.6447 0 11.1248 0 13.5769 L 0 43.5541 C 0 46.0062 1.3033 47.4863 3.7112 47.4863 Z M 4.1752 43.8192 C 3.7996 43.8192 3.5566 43.5983 3.5566 43.1786 L 3.5566 13.9524 C 3.5566 13.5327 3.7996 13.3118 4.1752 13.3118 C 6.3400 13.3118 13.9393 17.8625 27.9891 17.8625 C 42.0609 17.8625 50.1240 13.2897 51.8251 13.2897 C 52.2006 13.2897 52.4435 13.5106 52.4435 13.9524 L 52.4435 43.1786 C 52.4435 43.5983 52.2006 43.8192 51.8251 43.8192 C 49.6602 43.8192 42.0609 39.2685 27.9891 39.2685 C 13.9172 39.2685 5.8762 43.8192 4.1752 43.8192 Z"
  }));
}

export default Pano;