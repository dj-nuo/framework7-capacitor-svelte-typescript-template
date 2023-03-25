function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function ArrowDownLeftCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 19.0234 21.6250 C 20.1718 21.6250 20.9218 22.3984 20.9218 23.6172 L 20.9218 28.0937 L 20.5468 32.1250 L 24.2733 28.1406 L 33.7655 18.6250 C 34.1640 18.25 34.6093 18.0390 35.2421 18.0390 C 36.3905 18.0390 37.1171 18.7890 37.1171 19.9609 C 37.1171 20.4766 36.9062 20.9688 36.5077 21.3437 L 26.9921 30.8594 L 22.9843 34.6094 L 26.7812 34.1875 L 31.4921 34.1875 C 32.7343 34.1875 33.5312 34.9609 33.5312 36.0859 C 33.5312 37.2578 32.7577 37.9844 31.5390 37.9844 L 19.3046 37.9844 C 17.9452 37.9844 17.1483 37.3750 17.1483 35.8516 L 17.1483 23.6875 C 17.1483 22.4688 17.8749 21.6250 19.0234 21.6250 Z"
  }));
}

export default ArrowDownLeftCircleFill;