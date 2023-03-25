function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SlashCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 19.3280 38.6875 C 18.1562 38.6875 17.3358 37.7734 17.3358 36.6484 C 17.3358 36.0625 17.6171 35.4766 18.1796 34.9141 L 34.8905 18.2031 C 35.4296 17.6641 36.0155 17.3594 36.5780 17.3594 C 37.7265 17.3594 38.6640 18.2734 38.6640 19.4219 C 38.6640 19.9844 38.3358 20.5703 37.8202 21.1094 L 21.0858 37.8437 C 20.5468 38.3828 20.0312 38.6875 19.3280 38.6875 Z"
  }));
}

export default SlashCircleFill;