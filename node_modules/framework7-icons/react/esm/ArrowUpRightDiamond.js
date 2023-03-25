function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowUpRightDiamond(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 32.9921 4.2461 C 30.0390 1.2930 25.8437 1.3632 22.8905 4.3164 L 4.3046 22.9023 C 1.3515 25.8554 1.2812 30.0508 4.2343 33.0039 L 23.0078 51.7539 C 25.9609 54.7070 30.1327 54.6601 33.1093 51.6836 L 51.6953 33.0976 C 54.6718 30.1211 54.7188 25.9492 51.7654 22.9961 Z M 30.5546 7.1054 L 48.9295 25.4336 C 50.4295 26.9336 50.4295 29.0195 48.9531 30.4961 L 30.5078 48.9414 C 29.0312 50.4414 26.9687 50.4179 25.4687 48.9179 L 7.0937 30.5430 C 5.6171 29.0664 5.5703 26.9570 7.0468 25.4805 L 25.4687 7.0586 C 26.9687 5.5586 29.0546 5.6289 30.5546 7.1054 Z M 39.5781 25.7617 C 41.0078 24.6132 41.0078 23.2305 39.5781 22.0820 L 34.0468 17.7695 C 32.8515 16.8320 31.2812 17.4883 31.2812 19.0117 L 31.2812 22.0352 L 24.8124 22.0352 C 20.2421 22.0352 18.0624 24.1914 18.0624 28.7148 L 18.0624 34.7383 C 18.0624 36.0742 18.7421 36.8711 19.9609 36.8476 C 21.1562 36.8242 21.8359 36.0742 21.8359 34.7383 L 21.8359 28.9023 C 21.8359 26.7695 22.8437 25.8086 24.8593 25.8086 L 31.2812 25.7851 L 31.2812 28.8086 C 31.2812 30.3320 32.8515 30.9883 34.0468 30.0742 Z"
  }));
}

export default ArrowUpRightDiamond;