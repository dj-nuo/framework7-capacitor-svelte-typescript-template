function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function MusicNoteList(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 29.7460 51.8359 C 33.2147 51.8359 38.4647 49.2344 38.4647 42.3437 L 38.4647 20.8984 C 38.4647 19.7265 38.6522 19.5156 39.7069 19.3047 L 50.8868 16.8437 C 51.7072 16.6563 52.2462 16 52.2462 15.1797 L 52.2462 6.3437 C 52.2462 5.0312 51.1912 4.1641 49.9024 4.4453 L 37.4803 7.1406 C 35.8632 7.4922 34.9960 8.3359 34.9960 9.7422 L 35.1366 35.8047 C 35.1366 36.8828 34.6444 37.5859 33.6835 37.7734 L 29.9569 38.5703 C 25.1757 39.5547 22.9491 42.0156 22.9491 45.6015 C 22.9491 49.2578 25.7850 51.8359 29.7460 51.8359 Z M 5.3476 16.3750 L 26.3007 16.3750 C 27.1913 16.3750 27.8944 15.6484 27.8944 14.7812 C 27.8944 13.9141 27.1913 13.2109 26.3007 13.2109 L 5.3476 13.2109 C 4.4803 13.2109 3.7538 13.9141 3.7538 14.7812 C 3.7538 15.6484 4.4803 16.3750 5.3476 16.3750 Z M 5.3476 24.7187 L 26.3007 24.7187 C 27.2147 24.7187 27.8944 23.9922 27.8944 23.1016 C 27.8944 22.2344 27.1913 21.5547 26.3007 21.5547 L 5.3476 21.5547 C 4.4803 21.5547 3.7538 22.2344 3.7538 23.1016 C 3.7538 23.9922 4.4569 24.7187 5.3476 24.7187 Z M 5.3476 33.0625 L 26.3007 33.0625 C 27.2147 33.0625 27.8944 32.3594 27.8944 31.4687 C 27.8944 30.6016 27.1913 29.8984 26.3007 29.8984 L 5.3476 29.8984 C 4.4803 29.8984 3.7538 30.6016 3.7538 31.4687 C 3.7538 32.3594 4.4569 33.0625 5.3476 33.0625 Z"
  }));
}

export default MusicNoteList;