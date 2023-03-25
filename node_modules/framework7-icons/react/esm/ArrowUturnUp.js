function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowUturnUp(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 21.0743 50.2070 C 30.0508 50.2070 36.2149 44.1602 36.2149 33.4492 L 36.2149 17.5821 L 35.9805 12.0977 L 39.7774 16.5274 L 46.3634 23.2774 C 46.7383 23.6524 47.2071 23.8633 47.7930 23.8633 C 49.0120 23.8633 49.8788 23.0195 49.8788 21.7774 C 49.8788 21.2617 49.6211 20.6524 49.2227 20.2539 L 35.6993 6.4727 C 35.2540 6.0039 34.7149 5.7930 34.1290 5.7930 C 33.5430 5.7930 33.0040 6.0039 32.5587 6.4727 L 19.0352 20.2539 C 18.6368 20.6524 18.4024 21.2617 18.4024 21.7774 C 18.4024 23.0195 19.2461 23.8633 20.4649 23.8633 C 21.0508 23.8633 21.5196 23.6524 21.8946 23.2774 L 28.4805 16.5274 L 32.2774 12.0977 L 32.0430 17.5821 L 32.0430 33.8008 C 32.0430 41.7930 27.6368 46.0352 21.3087 46.0352 C 15.0040 46.0352 10.3165 41.7930 10.3165 33.8008 L 10.3165 28.4102 C 10.3165 27.1211 9.3790 26.2774 8.2071 26.2774 C 7.0587 26.2774 6.1212 27.1211 6.1212 28.4102 L 6.1212 33.8242 C 6.1212 44.3242 12.1212 50.2070 21.0743 50.2070 Z"
  }));
}

export default ArrowUturnUp;