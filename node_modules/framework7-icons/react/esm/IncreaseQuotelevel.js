function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function IncreaseQuotelevel(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 5.5235 49.8555 C 6.5079 49.8555 7.2813 49.0352 7.2813 48.0508 L 7.2813 7.9258 C 7.2813 6.9414 6.5079 6.1445 5.5235 6.1445 C 4.5157 6.1445 3.7423 6.9414 3.7423 7.9258 L 3.7423 48.0508 C 3.7423 49.0352 4.5157 49.8555 5.5235 49.8555 Z M 17.2188 49.8555 C 18.2032 49.8555 18.9767 49.0352 18.9767 48.0508 L 18.9767 7.9258 C 18.9767 6.9414 18.2032 6.1445 17.2188 6.1445 C 16.2110 6.1445 15.4376 6.9414 15.4376 7.9258 L 15.4376 48.0508 C 15.4376 49.0352 16.2110 49.8555 17.2188 49.8555 Z M 28.9142 49.8555 C 29.8985 49.8555 30.6720 49.0352 30.6720 48.0508 L 30.6720 7.9258 C 30.6720 6.9414 29.8985 6.1445 28.9142 6.1445 C 27.9064 6.1445 27.1329 6.9414 27.1329 7.9258 L 27.1329 48.0508 C 27.1329 49.0352 27.9064 49.8555 28.9142 49.8555 Z M 43.0938 35.1836 L 50.8518 30.0039 C 52.2577 29.0664 52.2112 27.0742 50.8518 26.1367 L 43.0938 20.8633 C 41.3126 19.6445 39.4142 20.3242 39.4142 22.4805 L 39.4142 33.5898 C 39.4142 35.6758 41.4064 36.3086 43.0938 35.1836 Z"
  }));
}

export default IncreaseQuotelevel;