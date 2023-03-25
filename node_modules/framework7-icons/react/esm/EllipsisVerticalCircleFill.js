function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function EllipsisVerticalCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M0.0937,23.9999 C0.0937,10.9218 10.9219,0.0937 24,0.0937 C37.0547,0.0937 47.9063,10.8983 47.9063,23.9765 C47.9063,37.0312 37.0547,47.9063 24,47.9063 C10.9219,47.9063 0.0937,37.0546 0.0937,23.9999 Z M23.9766,15.7265 C25.8281,15.7265 27.4922,14.1093 27.4922,12.2343 C27.4922,10.3124 25.8516,8.7655 23.9766,8.7655 C22.125,8.7655 20.4844,10.3358 20.4844,12.2343 C20.4844,14.1093 22.125,15.7265 23.9766,15.7265 Z M23.9766,27.4452 C25.8281,27.4452 27.4922,25.8514 27.4922,23.9765 C27.4922,22.078 25.8516,20.5077 23.9766,20.5077 C22.125,20.5077 20.4844,22.1014 20.4844,23.9765 C20.4844,25.8514 22.125,27.4452 23.9766,27.4452 Z M23.9766,39.1874 C25.8281,39.1874 27.4922,37.5936 27.4922,35.6952 C27.4922,33.8202 25.8516,32.203 23.9766,32.203 C22.125,32.203 20.4844,33.8436 20.4844,35.6952 C20.4844,37.5936 22.125,39.1874 23.9766,39.1874 Z",
    transform: "translate(4 4)"
  }));
}

export default EllipsisVerticalCircleFill;