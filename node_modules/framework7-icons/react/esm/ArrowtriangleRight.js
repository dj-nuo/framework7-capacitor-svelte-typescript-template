function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowtriangleRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 11.7109 46.6328 C 12.6484 46.6328 13.3984 46.2344 14.3828 45.7422 L 44.5000 31.1406 C 46.4922 30.1562 47.125 29.2422 47.125 28.0000 C 47.125 26.7578 46.4922 25.8672 44.5000 24.8828 L 14.3828 10.2578 C 13.375 9.7656 12.625 9.3672 11.6875 9.3672 C 9.9531 9.3672 8.875 10.6797 8.875 12.7187 L 8.8984 43.2812 C 8.8984 45.3203 9.9766 46.6328 11.7109 46.6328 Z M 12.8828 42.1797 C 12.7422 42.1797 12.6484 42.0859 12.6484 41.8984 L 12.6484 14.1015 C 12.6484 13.9140 12.7422 13.8203 12.8828 13.8203 C 12.9766 13.8203 13.0703 13.8672 13.1640 13.9375 L 41.875 27.7422 C 41.9922 27.7891 42.0859 27.8828 42.0859 28.0000 C 42.0859 28.1172 41.9922 28.2109 41.875 28.2578 L 13.1640 42.0859 C 13.0703 42.1328 12.9766 42.1797 12.8828 42.1797 Z"
  }));
}

export default ArrowtriangleRight;