function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function BinXmarkFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 4.1056 17.0898 L 51.8944 17.0898 C 54.5430 17.0898 55.8788 15.5196 55.8788 12.8945 L 55.8788 10.6211 C 55.8788 7.9961 54.5430 6.4258 51.8944 6.4258 L 4.1056 6.4258 C 1.5977 6.4258 .1212 7.9961 .1212 10.6211 L .1212 12.8945 C .1212 15.5196 1.4571 17.0898 4.1056 17.0898 Z M 15.7071 49.5742 L 40.2930 49.5742 C 44.9104 49.5742 46.7617 47.1367 47.4414 42.5899 L 50.7932 20.2774 L 5.2305 20.2774 L 8.5587 42.5899 C 9.2618 47.1602 11.0899 49.5742 15.7071 49.5742 Z M 21.2618 42.3320 C 20.2071 42.3320 19.3868 41.4649 19.3868 40.4336 C 19.3868 39.9180 19.5977 39.4961 19.9493 39.1445 L 25.3399 33.7071 L 19.9493 28.2461 C 19.5977 27.9180 19.3868 27.4727 19.3868 26.9571 C 19.3868 25.9492 20.2305 25.1289 21.2618 25.1289 C 21.7540 25.1289 22.1758 25.3398 22.5274 25.6680 L 27.9883 31.1055 L 33.4727 25.6445 C 33.8712 25.2930 34.2696 25.0820 34.7383 25.0820 C 35.7930 25.0820 36.6368 25.9023 36.6368 26.9571 C 36.6368 27.4492 36.4258 27.8477 36.0508 28.2227 L 30.6368 33.7071 L 36.0274 39.1211 C 36.3790 39.4961 36.6134 39.8945 36.6134 40.4336 C 36.6134 41.4649 35.7696 42.3320 34.7383 42.3320 C 34.1993 42.3320 33.7774 42.0742 33.4258 41.7461 L 27.9883 36.3320 L 22.5508 41.7461 C 22.2227 42.0977 21.7540 42.3320 21.2618 42.3320 Z"
  }));
}

export default BinXmarkFill;