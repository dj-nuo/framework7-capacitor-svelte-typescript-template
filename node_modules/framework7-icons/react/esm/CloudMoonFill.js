function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CloudMoonFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 45.3923 35.8601 C 52.0380 34.6886 56 29.2781 56 25.7848 C 56 24.9541 55.6165 24.3576 54.9351 24.3576 C 53.9126 24.3576 52.3578 25.7209 49.4180 25.7209 C 44.2206 25.7209 40.9191 22.5683 40.9191 17.8182 C 40.9191 14.9852 42.4315 12.9403 42.4315 11.8114 C 42.4315 11.1510 41.9839 10.7037 41.1320 10.7250 C 37.1914 10.8954 32.2070 15.3047 31.0781 20.9708 C 31.7384 21.5885 32.3774 22.4192 32.8887 23.5269 C 40.0671 24.0807 45.2645 29.4912 45.3923 35.8601 Z M 8.8399 46.7662 L 31.8875 46.7662 C 37.9157 46.7662 42.6017 42.1865 42.6017 36.2861 C 42.6017 30.4284 37.8305 25.9978 31.4615 25.9552 C 28.9693 21.2051 24.5387 18.4360 19.3838 18.4360 C 12.4611 18.4360 6.5820 23.8038 5.9430 30.8118 C 2.3218 31.8981 0 34.9655 0 38.7144 C 0 43.4859 3.5999 46.7662 8.8399 46.7662 Z"
  }));
}

export default CloudMoonFill;