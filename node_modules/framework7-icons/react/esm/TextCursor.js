function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function TextCursor(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 35.5702 52.3984 L 49.2580 52.3984 C 50.3125 52.3984 50.8751 51.8828 50.8751 51.0156 C 50.8751 50.1250 50.3125 49.6563 49.2580 49.6563 L 43.9843 49.6563 L 43.9843 6.3203 L 49.2580 6.3203 C 50.3125 6.3203 50.8751 5.8281 50.8751 4.9375 C 50.8751 4.0703 50.3125 3.6016 49.2580 3.6016 L 35.5702 3.6016 C 34.4921 3.6016 33.9531 4.0703 33.9531 4.9375 C 33.9531 5.8281 34.4921 6.3203 35.5702 6.3203 L 40.8202 6.3203 L 40.8202 49.6563 L 35.5702 49.6563 C 34.4921 49.6563 33.9531 50.1250 33.9531 51.0156 C 33.9531 51.8828 34.4921 52.3984 35.5702 52.3984 Z M 18.8593 45.3672 C 20.1952 45.3672 21.0858 44.5234 21.0858 43.1641 L 21.0858 15.2500 L 30.6015 15.2500 C 31.7734 15.2500 32.6171 14.4766 32.6171 13.2812 C 32.6171 12.0859 31.7734 11.3125 30.6015 11.3125 L 7.1640 11.3125 C 5.9687 11.3125 5.1249 12.0859 5.1249 13.2812 C 5.1249 14.4766 5.9687 15.2500 7.1640 15.2500 L 16.6796 15.2500 L 16.6796 43.1641 C 16.6796 44.5234 17.5233 45.3672 18.8593 45.3672 Z"
  }));
}

export default TextCursor;