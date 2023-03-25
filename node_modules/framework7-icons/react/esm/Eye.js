function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Eye(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 28.0103 46.4556 C 44.5664 46.4556 56 33.0754 56 28.8954 C 56 24.6949 44.5459 11.3351 28.0103 11.3351 C 11.6795 11.3351 0 24.6949 0 28.8954 C 0 33.0754 11.6590 46.4556 28.0103 46.4556 Z M 28.0103 43.2181 C 14.5277 43.2181 3.5858 31.7845 3.5858 28.8954 C 3.5858 26.4570 14.5277 14.5726 28.0103 14.5726 C 41.4518 14.5726 52.4142 26.4570 52.4142 28.8954 C 52.4142 31.7845 41.4518 43.2181 28.0103 43.2181 Z M 28.0103 40.3700 C 34.3828 40.3700 39.5055 35.1449 39.5055 28.8954 C 39.5055 22.4819 34.3828 17.4208 28.0103 17.4208 C 21.5968 17.4208 16.4537 22.4819 16.4947 28.8954 C 16.5152 35.1449 21.5968 40.3700 28.0103 40.3700 Z M 28.0103 32.7066 C 25.8793 32.7066 24.1581 30.9854 24.1581 28.8954 C 24.1581 26.7849 25.8793 25.0842 28.0103 25.0842 C 30.1208 25.0842 31.8420 26.7849 31.8420 28.8954 C 31.8420 30.9854 30.1208 32.7066 28.0103 32.7066 Z"
  }));
}

export default Eye;