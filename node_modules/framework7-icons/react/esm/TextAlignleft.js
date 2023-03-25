function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function TextAlignleft(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 6.1679 11.3594 L 49.8085 11.3594 C 50.8165 11.3594 51.6133 10.5859 51.6133 9.5781 C 51.6133 8.5937 50.8165 7.8203 49.8085 7.8203 L 6.1679 7.8203 C 5.1601 7.8203 4.3867 8.5937 4.3867 9.5781 C 4.3867 10.5859 5.1601 11.3594 6.1679 11.3594 Z M 6.1679 23.6406 L 32.5117 23.6406 C 33.4960 23.6406 34.3164 22.8672 34.3164 21.8594 C 34.3164 20.8750 33.4960 20.1015 32.5117 20.1015 L 6.1679 20.1015 C 5.1601 20.1015 4.3867 20.8750 4.3867 21.8594 C 4.3867 22.8672 5.1601 23.6406 6.1679 23.6406 Z M 6.1679 35.9219 L 49.8085 35.9219 C 50.8165 35.9219 51.6133 35.1250 51.6133 34.1406 C 51.6133 33.1563 50.8165 32.3828 49.8085 32.3828 L 6.1679 32.3828 C 5.1601 32.3828 4.3867 33.1563 4.3867 34.1406 C 4.3867 35.1250 5.1601 35.9219 6.1679 35.9219 Z M 6.1679 48.1797 L 32.5117 48.1797 C 33.4960 48.1797 34.3164 47.4063 34.3164 46.4219 C 34.3164 45.4375 33.4960 44.6406 32.5117 44.6406 L 6.1679 44.6406 C 5.1601 44.6406 4.3867 45.4375 4.3867 46.4219 C 4.3867 47.4063 5.1601 48.1797 6.1679 48.1797 Z"
  }));
}

export default TextAlignleft;