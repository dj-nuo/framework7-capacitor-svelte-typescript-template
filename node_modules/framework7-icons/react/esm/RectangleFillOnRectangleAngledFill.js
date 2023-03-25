function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function RectangleFillOnRectangleAngledFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 9.6349 46.7440 L 9.6349 25.7668 C 9.6349 20.0143 12.6839 17.0060 18.4973 17.0060 L 44.3734 17.0060 L 43.6619 12.8796 C 42.9505 8.7533 40.4502 7.0458 36.2833 7.7776 L 5.9354 13.1439 C 1.7278 13.8756 0 16.3149 .7521 20.4615 L 4.4515 41.5200 C 5.0614 44.8943 6.8501 46.6017 9.6349 46.7440 Z M 18.8022 53.9803 L 49.6174 53.9803 C 53.8661 53.9803 56 51.8664 56 47.6790 L 56 26.0717 C 56 21.9047 53.8661 19.7907 49.6174 19.7907 L 18.8022 19.7907 C 14.5336 19.7907 12.4197 21.8844 12.4197 26.0717 L 12.4197 47.6790 C 12.4197 51.8664 14.5336 53.9803 18.8022 53.9803 Z"
  }));
}

export default RectangleFillOnRectangleAngledFill;