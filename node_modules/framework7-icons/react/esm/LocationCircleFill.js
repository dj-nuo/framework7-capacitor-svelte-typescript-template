function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function LocationCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 18.6952 40.0000 C 17.9687 40.0000 17.4765 39.4844 17.4765 38.7344 C 17.4765 38.4297 17.5468 38.125 17.6640 37.8438 L 26.3358 15.6953 C 26.7109 14.7813 27.2499 14.3360 28.0234 14.3360 C 28.7499 14.3360 29.3124 14.7813 29.6405 15.6953 L 38.3358 37.8438 C 38.4530 38.125 38.5468 38.4297 38.5468 38.7344 C 38.5468 39.4844 38.0546 40.0000 37.3046 40.0000 C 36.9530 40.0000 36.5780 39.8594 36.3436 39.625 L 28.5624 31.8203 C 28.3514 31.6094 28.1874 31.4922 28.0234 31.4922 C 27.8358 31.4922 27.6483 31.6094 27.4374 31.8203 L 19.6327 39.625 C 19.3983 39.8594 19.0468 40.0000 18.6952 40.0000 Z"
  }));
}

export default LocationCircleFill;