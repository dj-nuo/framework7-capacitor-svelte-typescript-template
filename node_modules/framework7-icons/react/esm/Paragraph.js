function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Paragraph(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 9.8945 17.8399 C 9.8945 24.8945 14.8633 29.5586 22.4102 29.5586 L 26.2070 29.5586 L 26.2070 47.6992 C 26.2070 49.0117 27.0273 49.8555 28.3633 49.8555 C 29.6758 49.8555 30.5430 49.0117 30.5430 47.6992 L 30.5430 10.4805 L 35.6289 10.4805 L 35.6289 47.6992 C 35.6289 49.0117 36.4492 49.8555 37.7617 49.8555 C 39.0977 49.8555 39.9648 49.0117 39.9648 47.6992 L 39.9648 10.4805 L 43.9258 10.4805 C 45.2617 10.4805 46.1055 9.5899 46.1055 8.2774 C 46.1055 6.9648 45.2617 6.1445 43.9258 6.1445 L 22.2930 6.1445 C 14.8164 6.1445 9.8945 10.7852 9.8945 17.8399 Z"
  }));
}

export default Paragraph;