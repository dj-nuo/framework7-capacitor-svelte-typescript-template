function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowLeftToLine(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 11.5469 43.8320 L 11.5469 28.4805 C 11.6640 28.8789 11.875 29.2539 12.2266 29.5820 L 27.7422 45.0742 C 28.2344 45.5430 28.7500 45.7539 29.3125 45.7539 C 30.4844 45.7539 31.3750 44.9101 31.3750 43.7383 C 31.3750 43.1758 31.1640 42.6133 30.7891 42.2148 L 25.6094 36.9648 L 17.875 29.9336 L 22.9140 30.0977 L 46.5860 30.0977 C 47.8047 30.0977 48.6484 29.2304 48.6484 28.0117 C 48.6484 26.7695 47.8047 25.9024 46.5860 25.9024 L 22.9140 25.9024 L 17.8984 26.0898 L 25.6094 19.0351 L 30.7891 13.7617 C 31.1640 13.3867 31.3750 12.8242 31.3750 12.2617 C 31.3750 11.0898 30.4844 10.2226 29.3125 10.2226 C 28.7500 10.2226 28.2344 10.4570 27.7422 10.9258 L 12.2266 26.4180 C 11.875 26.7461 11.6640 27.1211 11.5469 27.5195 L 11.5469 12.2148 C 11.5469 10.9961 10.6797 10.1524 9.4609 10.1524 C 8.2187 10.1524 7.3516 10.9961 7.3516 12.2148 L 7.3516 43.8320 C 7.3516 45.0273 8.2187 45.8476 9.4609 45.8476 C 10.6797 45.8476 11.5469 45.0273 11.5469 43.8320 Z"
  }));
}

export default ArrowLeftToLine;