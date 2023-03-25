function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Piano(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M24,28 L23,28 C22.4477153,28 22,27.5522847 22,27 L22,4 L17,4 L17,27 C17,27.5522847 16.5522847,28 16,28 L15,28 L15,44 C15,45.1045695 15.8954305,46 17,46 L22,46 C23.1045695,46 24,45.1045695 24,44 L24,28 Z M26,28 L26,44 C26,45.1045695 26.8954305,46 28,46 L33,46 C34.1045695,46 35,45.1045695 35,44 L35,28 L34,28 C33.4477153,28 33,27.5522847 33,27 L33,4 L28,4 L28,27 C28,27.5522847 27.5522847,28 27,28 L26,28 Z M13,28 L12,28 C11.4477153,28 11,27.5522847 11,27 L11,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,44 C4,45.1045695 4.8954305,46 6,46 L11,46 C12.1045695,46 13,45.1045695 13,44 L13,28 Z M39,4 L39,27 C39,27.5522847 38.5522847,28 38,28 L37,28 L37,44 C37,45.1045695 37.8954305,46 39,46 L44,46 C45.1045695,46 46,45.1045695 46,44 L46,6 C46,4.8954305 45.1045695,4 44,4 L39,4 Z M4,0 L46,0 C48.209139,0 50,1.790861 50,4 L50,46 C50,48.209139 48.209139,50 46,50 L4,50 C1.790861,50 0,48.209139 0,46 L0,4 C0,1.790861 1.790861,0 4,0 Z",
    transform: "translate(3 3)"
  }));
}

export default Piano;