function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function HeartCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 22.2577 17.5469 C 24.8124 17.5469 26.8046 19 27.9999 21.1797 C 29.1718 19 31.2109 17.5469 33.7187 17.5469 C 37.7733 17.5469 40.6796 20.5937 40.6796 24.8125 C 40.6796 31.0937 34.0468 36.8594 29.1718 39.9766 C 28.7968 40.2109 28.3514 40.5391 28.0468 40.5391 C 27.7421 40.5391 27.2265 40.2109 26.8280 39.9766 C 21.9530 36.8594 15.2968 31.0937 15.2968 24.8125 C 15.2968 20.5937 18.2265 17.5469 22.2577 17.5469 Z"
  }));
}

export default HeartCircleFill;