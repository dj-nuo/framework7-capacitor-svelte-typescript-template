function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function SquareArrowUpOnSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 22.3101 15.5805 C 23.1928 15.5805 23.9318 14.8620 23.9318 13.9998 L 23.9318 7.5746 L 23.8087 4.5159 L 25.2046 5.9734 L 28.3043 9.2784 C 28.5917 9.6069 29.0227 9.7711 29.4128 9.7711 C 30.2750 9.7711 30.9113 9.1553 30.9113 8.3342 C 30.9113 7.8825 30.7471 7.5541 30.4392 7.2462 L 23.5008 .5541 C 23.0902 .1434 22.7207 0 22.3101 0 C 21.8791 0 21.5301 .1434 21.1195 .5541 L 14.1811 7.2462 C 13.8732 7.5541 13.6884 7.8825 13.6884 8.3342 C 13.6884 9.1553 14.3042 9.7711 15.1664 9.7711 C 15.5770 9.7711 16.0081 9.6069 16.2954 9.2784 L 19.4157 5.9734 L 20.8116 4.4954 L 20.6679 7.5746 L 20.6679 13.9998 C 20.6679 14.8620 21.4274 15.5805 22.3101 15.5805 Z M 10.5271 46.3313 L 34.0726 46.3313 C 38.3835 46.3313 40.5184 44.1964 40.5184 39.9677 L 40.5184 20.3430 C 40.5184 16.1142 38.3835 13.9793 34.0726 13.9793 L 24.4040 13.9793 L 24.4040 28.6568 C 24.4040 29.7858 23.4392 30.7301 22.3101 30.7301 C 21.1606 30.7301 20.2163 29.7858 20.2163 28.6568 L 20.2163 13.9793 L 10.5271 13.9793 C 6.2573 13.9793 4.0813 16.0937 4.0813 20.3430 L 4.0813 39.9677 C 4.0813 44.2170 6.2573 46.3313 10.5271 46.3313 Z M 22.3923 56.0000 L 44.3365 56.0000 C 48.6268 56.0000 50.7617 53.8856 50.7617 49.6364 L 50.7617 28.0410 C 50.7617 23.8122 48.6268 21.6773 44.3365 21.6773 L 43.3103 21.6773 L 43.3103 40.2756 C 43.3103 46.1055 40.2515 49.1437 34.3806 49.1437 L 15.9670 49.1437 L 15.9670 49.6364 C 15.9670 53.8651 18.1224 56.0000 22.3923 56.0000 Z"
  }));
}

export default SquareArrowUpOnSquareFill;