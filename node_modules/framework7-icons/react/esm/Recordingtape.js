function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Recordingtape(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 13.8438 38.7930 L 42.1797 38.7930 C 48.1561 38.7930 52.9609 33.9414 52.9609 27.9883 C 52.9609 22.0586 48.1561 17.2070 42.1797 17.2070 C 36.2266 17.2070 31.3985 22.0586 31.3985 27.9883 C 31.3985 30.8711 32.5235 33.4961 34.3750 35.4180 L 21.6250 35.4180 C 23.4531 33.4961 24.6016 30.8711 24.6016 27.9883 C 24.6016 22.0586 19.7969 17.2070 13.8438 17.2070 C 7.8672 17.2070 3.0391 22.0586 3.0391 27.9883 C 3.0391 33.9414 7.8907 38.7930 13.8438 38.7930 Z M 13.8438 35.0664 C 9.9063 35.0664 6.7657 31.9024 6.7657 27.9883 C 6.7657 24.0976 9.9063 20.9336 13.8438 20.9336 C 17.7578 20.9336 20.9219 24.0976 20.9219 27.9883 C 20.9219 31.9024 17.7578 35.0664 13.8438 35.0664 Z M 42.1797 35.0664 C 38.2657 35.0664 35.1250 31.9024 35.1250 27.9883 C 35.1250 24.0976 38.2657 20.9336 42.1797 20.9336 C 46.0938 20.9336 49.2577 24.0976 49.2577 27.9883 C 49.2577 31.9024 46.0938 35.0664 42.1797 35.0664 Z"
  }));
}

export default Recordingtape;