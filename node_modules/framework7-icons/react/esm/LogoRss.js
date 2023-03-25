function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function LogoRss(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8,34 C12.418278,34 16,37.581722 16,42 C16,46.418278 12.418278,50 8,50 C3.581722,50 0,46.418278 0,42 C0,37.581722 3.581722,34 8,34 Z M0,0 C27.6142375,0 50,22.3857625 50,50 L42,50 C42,26.8040405 23.1959595,8 0,8 L0,0 Z M3.55271368e-15,15 C19.3299662,15 35,30.6700338 35,50 L27,50 C27,35.0883118 14.9116882,23 3.55271368e-15,23 L3.55271368e-15,15 Z",
    transform: "translate(3 3)"
  }));
}

export default LogoRss;