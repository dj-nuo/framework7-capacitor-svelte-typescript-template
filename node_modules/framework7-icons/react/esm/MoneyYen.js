function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function MoneyYen(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("polygon", {
    fillRule: "evenodd",
    points: "26.47 0 16.874 16.937 23.06 16.937 23.06 19.512 15.606 19.512 15.606 23.137 23.06 23.137 23.06 25.713 15.606 25.713 15.606 32.255 10.841 32.255 10.841 25.713 3.388 25.713 3.388 23.137 10.841 23.137 10.841 19.512 3.388 19.512 3.388 16.937 9.574 16.937 0 0 5.333 0 13.18 14.634 13.311 14.634 21.158 0",
    transform: "translate(15 12)"
  }));
}

export default MoneyYen;