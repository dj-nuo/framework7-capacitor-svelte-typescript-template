function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ZoomIn(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 23.9570 41.7695 C 27.8476 41.7695 31.4804 40.5039 34.4336 38.3945 L 45.5429 49.5039 C 46.0585 50.0195 46.7382 50.2774 47.4414 50.2774 C 48.9648 50.2774 50.0664 49.1055 50.0664 47.6055 C 50.0664 46.9023 49.8322 46.2461 49.3162 45.7305 L 38.2773 34.6679 C 40.5976 31.6211 41.9804 27.8476 41.9804 23.7461 C 41.9804 13.8320 33.8710 5.7226 23.9570 5.7226 C 14.0195 5.7226 5.9336 13.8320 5.9336 23.7461 C 5.9336 33.6601 14.0195 41.7695 23.9570 41.7695 Z M 23.9570 37.8789 C 16.1992 37.8789 9.8242 31.4805 9.8242 23.7461 C 9.8242 16.0117 16.1992 9.6133 23.9570 9.6133 C 31.6914 9.6133 38.0898 16.0117 38.0898 23.7461 C 38.0898 31.4805 31.6914 37.8789 23.9570 37.8789 Z M 25.8554 30.6836 L 25.8554 25.5039 L 30.5898 25.5039 C 31.5507 25.5039 32.3710 24.6836 32.3710 23.7461 C 32.3710 22.8086 31.5507 21.9883 30.5898 21.9883 L 25.8554 21.9883 L 25.8554 16.8086 C 25.8554 15.6836 24.9414 15.0039 23.9570 15.0039 C 22.9726 15.0039 22.0351 15.6836 22.0351 16.8086 L 22.0351 21.9883 L 17.3007 21.9883 C 16.3398 21.9883 15.5429 22.8086 15.5429 23.7461 C 15.5429 24.6836 16.3398 25.5039 17.3007 25.5039 L 22.0351 25.5039 L 22.0351 30.6836 C 22.0351 31.8086 22.9726 32.4883 23.9570 32.4883 C 24.9414 32.4883 25.8554 31.8086 25.8554 30.6836 Z"
  }));
}

export default ZoomIn;