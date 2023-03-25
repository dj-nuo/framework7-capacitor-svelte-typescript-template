function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function BackwardEndFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 9.2500 47.0898 L 14.5703 47.0898 C 16.6328 47.0898 17.6875 46.0117 17.6875 43.9492 L 17.6875 28.8789 C 17.6172 28.5976 17.5703 28.2930 17.5703 27.9883 C 17.5703 27.6602 17.6172 27.3555 17.6875 27.0742 L 17.6875 12.0273 C 17.6875 9.8945 16.6328 8.9102 14.5703 8.9102 L 9.2500 8.9102 C 7.1875 8.9102 6.1094 9.9883 6.1094 12.0273 L 6.1094 43.9492 C 6.1094 46.0117 7.1875 47.0898 9.2500 47.0898 Z M 46.5157 46.3867 C 48.3671 46.3867 49.8906 45.0039 49.8906 42.3789 L 49.8906 13.5976 C 49.8906 10.9727 48.3671 9.5664 46.5157 9.5664 C 45.5781 9.5664 44.7813 9.8711 43.8203 10.4336 L 19.9375 24.4961 C 18.6719 25.2461 17.9688 26.1133 17.6875 27.0742 L 17.6875 28.8789 C 17.9688 29.8633 18.6719 30.7071 19.9375 31.4805 L 43.8203 45.5195 C 44.7813 46.0820 45.5781 46.3867 46.5157 46.3867 Z"
  }));
}

export default BackwardEndFill;