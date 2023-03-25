function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowRightToLineAlt(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 30.2616 45.7656 C 30.8007 45.7656 31.2928 45.5781 31.7616 45.1328 L 47.3473 29.5703 C 47.7462 29.1953 48.0040 28.7266 48.0505 28.2344 L 48.0505 43.7500 C 48.0505 44.9453 48.9414 45.7656 50.1601 45.7656 C 51.3788 45.7656 52.2462 44.9453 52.2462 43.7500 L 52.2462 12.3203 C 52.2462 11.1016 51.3788 10.2344 50.1601 10.2344 C 48.9414 10.2344 48.0505 11.1016 48.0505 12.3203 L 48.0505 27.7891 C 48.0040 27.2969 47.7462 26.8282 47.3473 26.4297 L 31.7616 10.8906 C 31.2928 10.4453 30.8007 10.2344 30.2616 10.2344 C 29.0897 10.2344 28.1991 11.1016 28.1991 12.2500 C 28.1991 12.8125 28.4101 13.3750 28.7616 13.7500 L 34.0116 19.0703 L 41.6991 26.1016 L 36.7069 25.9141 L 5.8163 25.9141 C 4.6210 25.9141 3.7538 26.7813 3.7538 28.0000 C 3.7538 29.2187 4.6210 30.1094 5.8163 30.1094 L 36.7069 30.1094 L 41.7225 29.9219 L 34.0116 36.9297 L 28.7616 42.2734 C 28.4101 42.6484 28.1991 43.2109 28.1991 43.7500 C 28.1991 44.9219 29.0897 45.7656 30.2616 45.7656 Z"
  }));
}

export default ArrowRightToLineAlt;