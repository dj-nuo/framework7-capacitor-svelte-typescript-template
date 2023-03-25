function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function MapPinSlash(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 26.9922 23.2422 L 31.3516 27.6016 L 31.3516 20.5703 C 35.1719 19.6094 37.9844 16.1172 37.9844 12.0156 C 37.9844 7.1641 34.0703 3.1797 29.1719 3.1797 C 24.2969 3.1797 20.3828 7.1641 20.3828 12.0156 C 20.3828 16.1172 23.1953 19.6094 26.9922 20.5703 Z M 26.6641 12.5078 C 25.0703 12.5078 23.6641 11.1016 23.6641 9.4609 C 23.6641 7.8437 25.0703 6.4609 26.6641 6.4609 C 28.3047 6.4609 29.6641 7.8437 29.6641 9.4609 C 29.6641 11.1016 28.3047 12.5078 26.6641 12.5078 Z M 43.8438 49.0234 C 44.5469 49.7266 45.7187 49.7266 46.3984 49.0234 C 47.1016 48.3203 47.1016 47.1719 46.3984 46.4687 L 12.1562 12.25 C 11.4531 11.5468 10.2812 11.5234 9.5781 12.25 C 8.8984 12.9297 8.8984 14.1016 9.5781 14.8047 Z M 26.9922 42.1328 C 26.9922 49.0469 28.2344 52.8203 29.1953 52.8203 C 30.0625 52.8203 31.3281 49.6328 31.3281 43.6562 L 31.3281 40.3984 L 26.9922 36.0859 Z"
  }));
}

export default MapPinSlash;