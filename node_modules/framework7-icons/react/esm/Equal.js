function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Equal(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7969 22.6914 L 42.2266 22.6914 C 43.3516 22.6914 44.3125 21.7305 44.3125 20.5820 C 44.3125 19.4336 43.3516 18.4961 42.2266 18.4961 L 13.7969 18.4961 C 12.6719 18.4961 11.6875 19.4336 11.6875 20.5820 C 11.6875 21.7305 12.6719 22.6914 13.7969 22.6914 Z M 13.7969 37.5039 L 42.2266 37.5039 C 43.3516 37.5039 44.3125 36.5664 44.3125 35.4180 C 44.3125 34.2696 43.3516 33.3086 42.2266 33.3086 L 13.7969 33.3086 C 12.6719 33.3086 11.6875 34.2696 11.6875 35.4180 C 11.6875 36.5664 12.6719 37.5039 13.7969 37.5039 Z"
  }));
}

export default Equal;