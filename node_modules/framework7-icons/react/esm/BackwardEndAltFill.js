function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function BackwardEndAltFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 2.3146 42.1054 L 6.2356 42.1054 C 7.7557 42.1054 8.5330 41.3109 8.5330 39.7908 L 8.5330 28.6841 C 8.4812 28.4768 8.4466 28.2523 8.4466 28.0277 C 8.4466 27.7859 8.4812 27.5613 8.5330 27.3540 L 8.5330 16.2646 C 8.5330 14.6927 7.7557 13.9673 6.2356 13.9673 L 2.3146 13.9673 C .7946 13.9673 0 14.7618 0 16.2646 L 0 39.7908 C 0 41.3109 .7946 42.1054 2.3146 42.1054 Z M 29.7791 41.5872 C 31.1436 41.5872 32.2664 40.5681 32.2664 38.6335 L 32.2664 28.6841 C 32.4738 29.4096 32.9920 30.0314 33.9249 30.6014 L 51.5260 40.9481 C 52.2343 41.3627 52.8218 41.5872 53.5301 41.5872 C 54.8772 41.5872 56 40.5681 56 38.6335 L 56 17.4219 C 56 15.4873 54.8772 14.4509 53.5301 14.4509 C 52.8218 14.4509 52.2343 14.6755 51.5260 15.0900 L 33.9249 25.4540 C 32.9920 26.0067 32.4738 26.6458 32.2664 27.3540 L 32.2664 17.4219 C 32.2664 15.4873 31.1436 14.4509 29.7791 14.4509 C 29.0882 14.4509 28.5009 14.6755 27.7927 15.0900 L 10.1912 25.4540 C 9.2585 26.0067 8.7403 26.6458 8.5330 27.3540 L 8.5330 28.6841 C 8.7403 29.4096 9.2585 30.0314 10.1912 30.6014 L 27.7927 40.9481 C 28.5009 41.3627 29.0882 41.5872 29.7791 41.5872 Z"
  }));
}

export default BackwardEndAltFill;