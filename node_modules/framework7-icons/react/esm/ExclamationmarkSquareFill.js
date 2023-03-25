function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ExclamationmarkSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 28.0117 31.4805 C 26.7695 31.4805 26.0898 30.7539 26.0429 29.5118 L 25.7148 17.9336 C 25.6679 16.6445 26.6523 15.7305 27.9882 15.7305 C 29.3007 15.7305 30.3320 16.6680 30.2851 17.9571 L 29.9335 29.5118 C 29.8866 30.7774 29.2070 31.4805 28.0117 31.4805 Z M 28.0117 40.1055 C 26.6523 40.1055 25.3866 39.0274 25.3866 37.5742 C 25.3866 36.1211 26.6288 35.0430 28.0117 35.0430 C 29.3710 35.0430 30.6366 36.0977 30.6366 37.5742 C 30.6366 39.0508 29.3476 40.1055 28.0117 40.1055 Z"
  }));
}

export default ExclamationmarkSquareFill;