function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PlusSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 27.9882 39.6367 C 26.6523 39.6367 25.9492 38.6758 25.9492 37.3164 L 25.9492 30.0274 L 18.2617 30.0274 C 16.8788 30.0274 15.9179 29.3008 15.9179 28.0118 C 15.9179 26.6758 16.8320 25.9258 18.2617 25.9258 L 25.9492 25.9258 L 25.9492 18.1680 C 25.9492 16.8086 26.6523 15.8477 27.9882 15.8477 C 29.2773 15.8477 30.0742 16.7617 30.0742 18.1680 L 30.0742 25.9258 L 37.7851 25.9258 C 39.2148 25.9258 40.1054 26.6758 40.1054 28.0118 C 40.1054 29.3008 39.1679 30.0274 37.7851 30.0274 L 30.0742 30.0274 L 30.0742 37.3164 C 30.0742 38.7227 29.2773 39.6367 27.9882 39.6367 Z"
  }));
}

export default PlusSquareFill;