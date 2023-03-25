function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Folder(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 8.4530 49.7500 L 48.2732 49.7500 C 52.4684 49.7500 54.9064 47.3125 54.9064 42.4844 L 54.9064 17.8047 C 54.9064 12.9766 52.4454 10.5625 47.5700 10.5625 L 24.7655 10.5625 C 23.1718 10.5625 22.2108 10.1641 21.0389 9.1797 L 19.6093 7.9844 C 18.0624 6.6953 16.8671 6.2500 14.5468 6.2500 L 7.5624 6.2500 C 3.4608 6.2500 1.0936 8.5937 1.0936 13.3281 L 1.0936 42.4844 C 1.0936 47.3359 3.5780 49.7500 8.4530 49.7500 Z M 4.8671 13.5156 C 4.8671 11.1953 6.1093 10.0235 8.3358 10.0235 L 13.5858 10.0235 C 15.1327 10.0235 16.0702 10.3984 17.2655 11.4297 L 18.6952 12.6015 C 20.2186 13.8672 21.4608 14.3359 23.7811 14.3359 L 47.5000 14.3359 C 49.8203 14.3359 51.1326 15.5781 51.1326 18.0156 L 51.1326 19.4219 L 4.8671 19.4219 Z M 8.5233 45.9766 C 6.1796 45.9766 4.8671 44.7344 4.8671 42.2969 L 4.8671 22.9610 L 51.1326 22.9610 L 51.1326 42.3203 C 51.1326 44.7344 49.8203 45.9766 47.5000 45.9766 Z"
  }));
}

export default Folder;