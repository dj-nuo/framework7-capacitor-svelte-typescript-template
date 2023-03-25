function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SquareGrid3x2Fill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 3.7596 27.6955 L 12.7353 27.6955 C 15.2351 27.6955 16.4949 26.4357 16.4949 23.8375 L 16.4949 15.0389 C 16.4949 12.4406 15.2351 11.2005 12.7353 11.2005 L 3.7596 11.2005 C 1.2598 11.2005 0 12.4406 0 15.0389 L 0 23.8375 C 0 26.4357 1.2598 27.6955 3.7596 27.6955 Z M 23.5220 27.6955 L 32.4781 27.6955 C 34.9976 27.6955 36.2378 26.4357 36.2378 23.8375 L 36.2378 15.0389 C 36.2378 12.4406 34.9976 11.2005 32.4781 11.2005 L 23.5220 11.2005 C 21.0222 11.2005 19.7624 12.4406 19.7624 15.0389 L 19.7624 23.8375 C 19.7624 26.4357 21.0222 27.6955 23.5220 27.6955 Z M 43.2646 27.6955 L 52.2405 27.6955 C 54.7402 27.6955 56.0000 26.4357 56.0000 23.8375 L 56.0000 15.0389 C 56.0000 12.4406 54.7402 11.2005 52.2405 11.2005 L 43.2646 11.2005 C 40.7648 11.2005 39.5051 12.4406 39.5051 15.0389 L 39.5051 23.8375 C 39.5051 26.4357 40.7648 27.6955 43.2646 27.6955 Z M 3.7596 47.4382 L 12.7353 47.4382 C 15.2351 47.4382 16.4949 46.1981 16.4949 43.5999 L 16.4949 34.7816 C 16.4949 32.2031 15.2351 30.9433 12.7353 30.9433 L 3.7596 30.9433 C 1.2598 30.9433 0 32.2031 0 34.7816 L 0 43.5999 C 0 46.1981 1.2598 47.4382 3.7596 47.4382 Z M 23.5220 47.4382 L 32.4781 47.4382 C 34.9976 47.4382 36.2378 46.1981 36.2378 43.5999 L 36.2378 34.7816 C 36.2378 32.2031 34.9976 30.9433 32.4781 30.9433 L 23.5220 30.9433 C 21.0222 30.9433 19.7624 32.2031 19.7624 34.7816 L 19.7624 43.5999 C 19.7624 46.1981 21.0222 47.4382 23.5220 47.4382 Z M 43.2646 47.4382 L 52.2405 47.4382 C 54.7402 47.4382 56.0000 46.1981 56.0000 43.5999 L 56.0000 34.7816 C 56.0000 32.2031 54.7402 30.9433 52.2405 30.9433 L 43.2646 30.9433 C 40.7648 30.9433 39.5051 32.2031 39.5051 34.7816 L 39.5051 43.5999 C 39.5051 46.1981 40.7648 47.4382 43.2646 47.4382 Z"
  }));
}

export default SquareGrid3x2Fill;