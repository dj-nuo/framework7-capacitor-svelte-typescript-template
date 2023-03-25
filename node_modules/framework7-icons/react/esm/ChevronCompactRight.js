function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ChevronCompactRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 26.6055 47.3945 L 32.8867 31.4101 C 33.3086 30.3320 33.8242 29.0195 33.8242 27.9883 C 33.8242 26.9570 33.3086 25.6445 32.8867 24.5664 L 26.6055 8.5820 C 26.2539 7.6679 25.4570 7.1055 24.5898 7.1055 C 23.2070 7.1055 22.1758 8.1133 22.1758 9.4726 C 22.1758 10.1523 22.5742 11.0898 22.7851 11.6992 L 29.2070 27.9883 L 22.7851 44.2773 C 22.5742 44.8867 22.1758 45.8008 22.1758 46.5039 C 22.1758 47.8867 23.2070 48.8945 24.5898 48.8945 C 25.4570 48.8945 26.2539 48.3086 26.6055 47.3945 Z"
  }));
}

export default ChevronCompactRight;