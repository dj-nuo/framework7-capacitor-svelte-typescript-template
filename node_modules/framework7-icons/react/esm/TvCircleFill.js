function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function TvCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 16.3280 37 C 14.1718 37 12.9999 35.8281 12.9999 33.6484 L 12.9999 21.0625 C 12.9999 18.9297 14.1952 17.7578 16.3280 17.7578 L 39.6718 17.7578 C 41.8280 17.7578 42.9999 18.9297 42.9999 21.0625 L 42.9999 33.6484 C 42.9999 35.8047 41.8046 37 39.6718 37 Z M 16.6796 33.9766 L 39.2733 33.9766 C 39.7187 33.9766 39.8358 33.8594 39.8358 33.4375 L 39.8358 21.3203 C 39.8358 20.8984 39.7421 20.7812 39.2733 20.7812 L 16.6796 20.7812 C 16.2343 20.7812 16.1171 20.8750 16.1171 21.3203 L 16.1171 33.4375 C 16.1171 33.8594 16.2343 33.9766 16.6796 33.9766 Z M 20.3358 41.7812 C 19.5624 41.7812 18.9765 41.1719 18.9765 40.3516 C 18.9765 39.6016 19.5858 38.9688 20.3358 38.9688 L 35.6171 38.9688 C 36.3905 38.9688 37.0234 39.6250 36.9999 40.3750 C 36.9765 41.1719 36.3905 41.7812 35.6171 41.7812 Z"
  }));
}

export default TvCircleFill;