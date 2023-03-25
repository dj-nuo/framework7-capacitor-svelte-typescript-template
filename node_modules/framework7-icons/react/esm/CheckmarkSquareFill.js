function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CheckmarkSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 24.8241 39.9883 C 24.0039 39.9883 23.3944 39.6367 22.7382 38.8398 L 15.9648 30.4961 C 15.6132 30.0508 15.4023 29.4883 15.4023 28.9727 C 15.4023 27.8711 16.2695 27.0274 17.3007 27.0274 C 17.9804 27.0274 18.5663 27.2852 19.1054 28.0118 L 24.7070 35.2539 L 35.6054 17.7930 C 36.0507 17.0664 36.6601 16.7149 37.2695 16.7149 C 38.3007 16.7149 39.3085 17.3945 39.3085 18.5196 C 39.3085 19.0352 39.0039 19.5977 38.6992 20.0664 L 26.7929 38.8398 C 26.2773 39.6133 25.6210 39.9883 24.8241 39.9883 Z"
  }));
}

export default CheckmarkSquareFill;