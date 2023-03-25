function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Speaker1Fill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 31.6679 49.5039 C 33.2616 49.5039 34.4101 48.3320 34.4101 46.7617 L 34.4101 9.3789 C 34.4101 7.8086 33.2616 6.4961 31.6210 6.4961 C 30.4726 6.4961 29.6992 7.0117 28.4570 8.1836 L 18.1210 17.9570 C 17.9570 18.0977 17.7460 18.1680 17.5116 18.1680 L 10.5507 18.1680 C 7.246 18.1680 5.4648 19.9726 5.4648 23.4883 L 5.4648 32.5820 C 5.4648 36.0977 7.246 37.9024 10.5507 37.9024 L 17.5116 37.9024 C 17.7460 37.9024 17.9570 37.9726 18.1210 38.1133 L 28.4570 47.9805 C 29.5819 49.0352 30.5194 49.5039 31.6679 49.5039 Z M 44.9804 38.3945 C 45.7772 38.9570 46.9257 38.7695 47.6053 37.8555 C 49.4336 35.3945 50.5352 31.7851 50.5352 28.1055 C 50.5352 24.4258 49.4101 20.8398 47.6053 18.3320 C 46.9257 17.4180 45.8007 17.2305 44.9804 17.7929 C 43.9492 18.4726 43.8319 19.6680 44.5819 20.6992 C 45.9413 22.5273 46.7616 25.3164 46.7616 28.1055 C 46.7616 30.8945 45.8944 33.6836 44.5585 35.5351 C 43.8554 36.5429 43.9726 37.6914 44.9804 38.3945 Z"
  }));
}

export default Speaker1Fill;