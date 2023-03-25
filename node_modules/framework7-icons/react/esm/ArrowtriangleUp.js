function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowtriangleUp(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 46.6445 44.2891 C 46.6445 43.3516 46.2227 42.6016 45.7305 41.6172 L 31.1289 11.5235 C 30.1445 9.5078 29.2305 8.8750 28.0117 8.8750 C 26.7695 8.8750 25.8554 9.5078 24.8711 11.5235 L 10.2695 41.6172 C 9.7773 42.6250 9.3555 43.3750 9.3555 44.3125 C 9.3555 46.0469 10.6914 47.1250 12.7305 47.1250 L 43.2695 47.1016 C 45.3320 47.1016 46.6445 46.0234 46.6445 44.2891 Z M 42.1680 43.1172 C 42.1680 43.2578 42.0742 43.3516 41.9102 43.3516 L 14.0898 43.3516 C 13.9258 43.3516 13.8320 43.2578 13.8320 43.1172 C 13.8320 43.0234 13.8789 42.9297 13.9258 42.8359 L 27.7305 14.1250 C 27.8008 14.0078 27.8711 13.9140 28.0117 13.9140 C 28.1289 13.9140 28.1992 14.0078 28.2695 14.1250 L 42.0742 42.8359 C 42.1211 42.9297 42.1680 43.0234 42.1680 43.1172 Z"
  }));
}

export default ArrowtriangleUp;