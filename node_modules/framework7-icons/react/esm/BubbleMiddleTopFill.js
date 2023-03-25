function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function BubbleMiddleTopFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9532 3.6484 C 26.8985 3.6484 25.9142 4.0937 24.9766 5.6875 L 20.6407 12.9297 L 12.9064 12.9297 C 5.9454 12.9297 2.1720 16.7969 2.1720 23.6641 L 2.1720 41.6172 C 2.1720 48.5078 5.9454 52.3516 12.9064 52.3516 L 43.0938 52.3516 C 50.0783 52.3516 53.8280 48.4844 53.8280 41.6172 L 53.8280 23.6641 C 53.8280 16.7969 50.0783 12.9297 43.0938 12.9297 L 35.2657 12.9297 L 30.9298 5.6875 C 29.9923 4.0937 29.0079 3.6484 27.9532 3.6484 Z"
  }));
}

export default BubbleMiddleTopFill;