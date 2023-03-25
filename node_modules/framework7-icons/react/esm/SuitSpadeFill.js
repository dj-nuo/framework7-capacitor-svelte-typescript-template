function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SuitSpadeFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 6.0038 33.2148 C 6.0038 38.7930 10.3163 43.1289 15.9179 43.1289 C 19.0351 43.1289 22.2226 42.0976 23.6054 39.3555 L 23.8397 39.3555 C 23.8397 42.4726 20.4179 45.0508 19.0351 46.5039 C 17.3475 48.2617 18.3788 50.6992 20.5585 50.6992 L 35.4413 50.6992 C 37.5975 50.6992 38.6288 48.2617 36.9413 46.5039 C 35.5585 45.0508 32.1366 42.4726 32.1366 39.3555 L 32.3944 39.3555 C 33.7538 42.0976 36.9648 43.1289 40.0585 43.1289 C 45.6601 43.1289 49.9962 38.7930 49.9962 33.2148 C 49.9962 22.7148 36.0273 18.2852 30.4257 6.9883 C 29.9570 6.0274 29.2304 5.3008 27.9882 5.3008 C 26.7460 5.3008 26.0429 6.0274 25.5507 6.9883 C 19.9491 18.2852 6.0038 22.7148 6.0038 33.2148 Z"
  }));
}

export default SuitSpadeFill;