function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function PinFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 14.2539 35.9688 L 25.9492 35.9688 L 25.9492 48.0156 C 25.9492 51.5781 27.4258 54.5781 28.0117 54.5781 C 28.5976 54.5781 30.0742 51.5781 30.0742 48.0156 L 30.0742 35.9688 L 41.7461 35.9688 C 43.3633 35.9688 44.5351 34.9375 44.5351 33.3672 C 44.5351 32.3828 44.2305 31.6797 43.5508 30.9532 L 36.3789 23.1719 C 35.8867 22.6563 35.5820 22.2813 35.6992 21.3203 L 36.8945 12.7657 C 36.9649 12.2735 37.0117 11.9922 37.4336 11.6875 L 43.1992 7.5157 C 44.4883 6.5781 45.0508 5.4297 45.0508 4.3750 C 45.0508 2.8047 43.7851 1.4219 41.9805 1.4219 L 14.0195 1.4219 C 12.2149 1.4219 10.9492 2.8047 10.9492 4.3750 C 10.9492 5.4297 11.5117 6.5781 12.7773 7.5157 L 18.5429 11.6875 C 18.9883 11.9922 19.0351 12.2735 19.1054 12.7657 L 20.3008 21.3203 C 20.4180 22.2813 20.1133 22.6563 19.6211 23.1719 L 12.4492 30.9532 C 11.7695 31.6797 11.4649 32.3828 11.4649 33.3672 C 11.4649 34.9375 12.6367 35.9688 14.2539 35.9688 Z"
  }));
}

export default PinFill;