function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function FolderFillBadgePersonCrop(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 45.5526 30.9084 C 51.2701 30.9084 56.0000 26.2195 56.0000 20.4611 C 56.0000 14.7439 51.2701 10.0138 45.5526 10.0138 C 39.8354 10.0138 35.1054 14.7439 35.1054 20.4611 C 35.1054 26.2195 39.8354 30.9084 45.5526 30.9084 Z M 32.4113 22.1063 C 32.3291 21.5717 32.2879 21.0164 32.2879 20.4611 C 32.2879 18.1989 32.8638 16.0601 33.8921 14.1886 L 20.7712 14.1886 C 19.3728 14.1886 18.5296 13.8390 17.5013 12.9752 L 16.2468 11.9264 C 14.8895 10.7953 13.8406 10.4045 11.8046 10.4045 L 5.6761 10.4045 C 2.0771 10.4045 0 12.4611 0 16.6153 L 0 22.1063 Z M 45.5526 21.0781 C 43.6606 21.0781 42.2004 19.5151 42.2004 17.3763 C 42.2004 15.4637 43.6606 13.8390 45.5526 13.8390 C 47.4449 13.8390 48.9047 15.4637 48.9047 17.3763 C 48.9047 19.5151 47.4449 21.0781 45.5526 21.0781 Z M 45.5526 28.5023 C 42.5504 28.5023 40.1850 26.9598 39.5271 25.5408 L 39.5271 25.4380 C 40.1850 24.1629 42.2829 22.7439 45.5526 22.7439 C 48.8226 22.7439 50.9205 24.1629 51.5991 25.4585 L 51.5991 25.5408 C 50.8999 26.9804 48.5552 28.5023 45.5526 28.5023 Z M 0 42.1989 C 0 46.4560 2.1800 48.5743 6.4576 48.5743 L 41.3984 48.5743 C 45.0796 48.5743 47.2188 46.4354 47.2188 42.1989 L 47.2188 33.6231 C 46.6839 33.7053 46.1287 33.7465 45.5732 33.7465 C 39.8354 33.7465 34.8998 30.0447 33.0489 24.9033 L 0 24.9033 Z"
  }));
}

export default FolderFillBadgePersonCrop;