function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function StaroflifeFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 31.5742 46.6914 L 31.5742 34.1289 L 42.3789 40.3633 C 44.5352 41.6523 45.4727 41.3477 46.9023 39.1445 L 47.0898 38.8867 C 48.5430 36.6602 48.0508 35.5117 45.8945 34.2930 L 34.6914 27.8242 L 45.8711 21.7071 C 48.0508 20.5117 48.3554 19.4102 47.0898 17.1367 L 46.9023 16.8555 C 45.5664 14.5586 44.4883 14.3945 42.3554 15.5898 L 31.5742 21.8476 L 31.5742 9.3086 C 31.5742 6.7539 30.7070 6.0508 28.0820 6.0508 L 27.8008 6.0508 C 25.1758 6.0508 24.3086 6.7539 24.3086 9.3086 L 24.3086 21.8476 L 13.5273 15.5898 C 11.4180 14.3476 10.0586 14.3945 8.9101 16.8555 L 8.7930 17.1133 C 7.6680 19.5039 7.8555 20.4649 10.0352 21.7305 L 21.1914 27.8242 L 9.9883 34.2930 C 7.8320 35.5352 7.4570 36.5898 8.8164 38.9102 L 8.9336 39.1211 C 10.2461 41.4180 11.3476 41.6523 13.5039 40.3633 L 24.3086 34.1289 L 24.3086 46.6914 C 24.3086 49.2461 25.1758 49.9492 27.8008 49.9492 L 28.0820 49.9492 C 30.7070 49.9492 31.5742 49.2461 31.5742 46.6914 Z"
  }));
}

export default StaroflifeFill;