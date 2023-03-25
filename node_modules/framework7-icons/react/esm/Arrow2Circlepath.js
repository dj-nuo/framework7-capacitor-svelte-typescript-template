function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Arrow2Circlepath(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 53.9490 26.3032 L 50.8619 26.3032 C 49.6223 14.8328 39.7520 5.7061 27.9886 5.7061 C 21.1380 5.7061 14.9183 8.8159 10.6817 13.7061 C 9.8253 14.6751 9.9605 15.8694 10.8394 16.5004 C 11.7408 17.1314 12.7999 16.9286 13.5436 16.0948 C 17.0365 12.0836 22.2196 9.5371 27.9886 9.5371 C 37.8140 9.5371 45.8138 16.8159 46.9856 26.3032 L 43.6280 26.3032 C 42.0280 26.3032 41.5999 27.3849 42.4787 28.6243 L 47.5039 35.8130 C 48.2252 36.8497 49.3070 36.8722 50.0506 35.8130 L 55.0982 28.6468 C 56 27.3849 55.5717 26.3032 53.9490 26.3032 Z M 2.0507 31.1032 L 5.1380 31.1032 C 6.3774 42.5736 16.2479 51.6778 27.9886 51.6778 C 34.8844 51.6778 41.1041 48.5454 45.3407 43.6778 C 46.1521 42.7088 46.0395 41.4919 45.1829 40.8609 C 44.2816 40.2299 43.2224 40.4553 42.4787 41.2891 C 39.0083 45.3229 33.8252 47.8468 27.9886 47.8468 C 18.1859 47.8468 10.1859 40.5905 9.0140 31.1032 L 12.3718 31.1032 C 13.9718 31.1032 14.3999 29.9990 13.5211 28.7821 L 8.4732 21.5933 C 7.7521 20.5567 6.6929 20.5342 5.9493 21.5933 L .9014 28.7595 C 0 29.9990 .4282 31.1032 2.0507 31.1032 Z"
  }));
}

export default Arrow2Circlepath;