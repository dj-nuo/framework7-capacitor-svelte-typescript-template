function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function BagFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 14.5586 51.9531 L 42.1445 51.9531 C 46.3633 51.9531 48.8008 49.5156 48.8008 44.6875 L 48.8008 20.4297 C 48.8008 15.6016 46.3398 13.1641 41.4414 13.1641 L 37.7148 13.1641 C 37.5742 8.2422 33.3086 4.0469 28.0117 4.0469 C 22.6914 4.0469 18.4258 8.2422 18.2852 13.1641 L 14.5586 13.1641 C 9.6836 13.1641 7.1992 15.5781 7.1992 20.4297 L 7.1992 44.6875 C 7.1992 49.5391 9.6836 51.9531 14.5586 51.9531 Z M 28.0117 7.6094 C 31.3164 7.6094 33.8242 10.0938 33.9414 13.1641 L 22.0820 13.1641 C 22.1758 10.0938 24.6836 7.6094 28.0117 7.6094 Z"
  }));
}

export default BagFill;