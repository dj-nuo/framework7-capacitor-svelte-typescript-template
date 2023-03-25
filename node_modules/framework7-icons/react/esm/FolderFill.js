function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function FolderFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 47.5700 10.5625 L 24.7655 10.5625 C 23.1718 10.5625 22.2108 10.1641 21.0389 9.1797 L 19.6093 7.9844 C 18.0624 6.6953 16.8671 6.2500 14.5468 6.2500 L 7.5624 6.2500 C 3.4608 6.2500 1.0936 8.5937 1.0936 13.3281 L 1.0936 19.5859 L 54.9064 19.5859 L 54.9064 17.8047 C 54.9064 12.9766 52.4454 10.5625 47.5700 10.5625 Z M 8.4530 49.7500 L 48.2732 49.7500 C 52.4684 49.7500 54.9064 47.3125 54.9064 42.4844 L 54.9064 22.7735 L 1.0936 22.7735 L 1.0936 42.4844 C 1.0936 47.3359 3.5780 49.7500 8.4530 49.7500 Z"
  }));
}

export default FolderFill;