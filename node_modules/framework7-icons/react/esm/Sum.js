function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Sum(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 17.4531 53.7695 L 39.3906 53.7695 C 40.6094 53.7695 41.5234 52.9961 41.5234 51.8008 C 41.5234 50.6055 40.6094 49.8086 39.3906 49.8086 L 19.3984 49.8086 L 19.3984 49.5977 L 32.3828 30.0039 C 32.9922 29.0664 33.2500 28.5742 33.2500 27.8008 C 33.2500 26.9571 32.8515 26.2305 32.0547 25.0586 L 19.4218 6.4024 L 19.4218 6.1914 L 39.4140 6.1914 C 40.6328 6.1914 41.5469 5.4180 41.5469 4.2227 C 41.5469 3.0273 40.6328 2.2305 39.4140 2.2305 L 17.4766 2.2305 C 15.7187 2.2305 14.4766 3.3320 14.4766 4.9492 C 14.4766 5.8633 14.7109 6.5195 15.3672 7.5039 L 28.9140 27.6367 L 28.9140 27.8945 L 15.3437 48.4961 C 14.6875 49.4805 14.4531 50.1367 14.4531 51.0508 C 14.4531 52.6445 15.7187 53.7695 17.4531 53.7695 Z"
  }));
}

export default Sum;