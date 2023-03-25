function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Tropicalstorm(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 14.8750 52.4453 C 28.9375 52.4453 39.9297 42.9062 39.9297 28.0000 C 39.9297 21.4609 34.5156 16.0469 28.0000 16.0469 C 25.6797 16.0469 23.4765 16.7266 21.6250 17.8984 C 25.1640 11.0313 32.4297 7.0938 41.1016 7.0938 C 42.1328 7.0938 42.9297 6.2969 42.9297 5.3359 C 42.9297 4.3281 42.1328 3.5547 41.1016 3.5547 C 27.0391 3.5547 16.0469 13.0938 16.0469 28.0000 C 16.0469 34.5391 21.4609 39.9531 28.0000 39.9531 C 30.3203 39.9531 32.5000 39.2734 34.3516 38.1016 C 30.8125 44.9687 23.5469 48.9062 14.8750 48.9062 C 13.8438 48.9062 13.0703 49.6797 13.0703 50.6875 C 13.0703 51.6484 13.8438 52.4453 14.8750 52.4453 Z M 28.0000 36.3672 C 23.4062 36.3672 19.6094 32.5703 19.6094 28.0000 C 19.6094 23.4297 23.4062 19.6328 28.0000 19.6328 C 32.5703 19.6328 36.3672 23.4297 36.3672 28.0000 C 36.3672 32.5703 32.5703 36.3672 28.0000 36.3672 Z M 28.0000 31.3984 C 29.8750 31.3984 31.3984 29.8516 31.3984 28.0000 C 31.3984 26.125 29.8750 24.6016 28.0000 24.6016 C 26.1250 24.6016 24.6016 26.125 24.6016 28.0000 C 24.6016 29.875 26.1250 31.3984 28.0000 31.3984 Z"
  }));
}

export default Tropicalstorm;