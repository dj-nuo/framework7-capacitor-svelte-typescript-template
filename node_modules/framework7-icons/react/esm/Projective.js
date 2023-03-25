function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Projective(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 9.7891 41.5234 C 10.3750 41.5234 10.8906 41.3359 11.3125 40.9140 L 28.0000 23.8281 L 44.6875 40.9140 C 45.0859 41.3125 45.625 41.5234 46.2109 41.5234 C 47.4531 41.5234 48.3672 40.6094 48.3672 39.3906 C 48.3672 38.7813 48.1328 38.2891 47.7344 37.8672 L 29.5703 19.2813 C 29.2656 18.9766 28.9140 18.7656 28.5156 18.6719 L 45.5547 18.6719 C 46.7734 18.6719 47.6172 17.7813 47.6172 16.5625 C 47.6172 15.3438 46.7734 14.4766 45.5547 14.4766 L 10.3984 14.4766 C 9.2031 14.4766 8.3593 15.3438 8.3593 16.5625 C 8.3593 17.7813 9.2031 18.6719 10.3984 18.6719 L 27.4844 18.6719 C 27.1093 18.7656 26.7344 18.9766 26.4297 19.2813 L 8.2656 37.8672 C 7.8437 38.2891 7.6328 38.7813 7.6328 39.3906 C 7.6328 40.6094 8.5703 41.5234 9.7891 41.5234 Z"
  }));
}

export default Projective;