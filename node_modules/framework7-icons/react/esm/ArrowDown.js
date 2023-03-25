function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowDown(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9883 5.8633 C 26.7695 5.8633 25.9024 6.7071 25.9024 7.9258 L 25.9024 38.7930 L 26.0898 43.8086 L 19.0586 36.0976 L 13.7383 30.8476 C 13.3633 30.4727 12.8008 30.2851 12.2383 30.2851 C 11.0898 30.2851 10.2227 31.1758 10.2227 32.3242 C 10.2227 32.8867 10.4336 33.3789 10.8789 33.8476 L 26.4414 49.4336 C 26.8867 49.9024 27.4258 50.1367 27.9883 50.1367 C 28.5742 50.1367 29.1133 49.9024 29.5586 49.4336 L 45.1211 33.8476 C 45.5664 33.3789 45.7773 32.8867 45.7773 32.3242 C 45.7773 31.1758 44.9102 30.2851 43.7383 30.2851 C 43.1992 30.2851 42.6367 30.4727 42.2617 30.8476 L 36.9180 36.0976 L 29.9102 43.7852 L 30.0976 38.7930 L 30.0976 7.9258 C 30.0976 6.7071 29.2071 5.8633 27.9883 5.8633 Z"
  }));
}

export default ArrowDown;