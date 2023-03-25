function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function HifispeakerFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 7.6797 7.8555 L 7.6797 48.1445 C 7.6797 53.0664 10.1172 55.5039 14.9453 55.5039 L 41.0547 55.5039 C 45.8828 55.5039 48.3203 53.0664 48.3203 48.1445 L 48.3203 7.8555 C 48.3203 2.9571 45.8828 .4961 41.0547 .4961 L 14.9453 .4961 C 10.1172 .4961 7.6797 2.9571 7.6797 7.8555 Z M 27.9766 20.3477 C 24.3438 20.3477 21.4609 17.4414 21.4609 13.7852 C 21.4609 10.1524 24.3438 7.2461 27.9766 7.2696 C 31.6094 7.2930 34.5156 10.1524 34.5391 13.7852 C 34.5625 17.4414 31.6094 20.3477 27.9766 20.3477 Z M 28.0000 17.1602 C 29.8516 17.1602 31.3750 15.6367 31.3750 13.7852 C 31.3750 11.9336 29.8047 10.4571 28.0000 10.4571 C 26.125 10.4571 24.625 11.9102 24.625 13.7852 C 24.625 15.6367 26.1484 17.1602 28.0000 17.1602 Z M 28.0000 48.5430 C 21.4609 48.5430 16.1875 43.2695 16.1875 36.6836 C 16.1875 30.1211 21.4609 24.8477 28.0000 24.8711 C 34.5391 24.9180 39.8125 30.1211 39.8125 36.6836 C 39.8125 43.2695 34.5391 48.5430 28.0000 48.5430 Z M 28.0000 41.6992 C 30.7891 41.6992 33.0156 39.4727 33.0156 36.6836 C 33.0156 33.8477 30.7891 31.6914 28.0000 31.6914 C 25.2109 31.6914 22.9844 33.8477 22.9844 36.6836 C 22.9844 39.4727 25.2578 41.6992 28.0000 41.6992 Z"
  }));
}

export default HifispeakerFill;