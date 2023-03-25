function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function MoneyPound(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.10152177,28.3816513 L24.0205078,28.3816513 L24.0205078,32.5888672 L0.0667854712,32.5888672 L0.0667854712,28.5408432 C4.07391374,27.9268171 6.03295423,24.6974946 6.03295423,21.0360797 C6.03295423,20.1036696 5.85485964,19.0802928 5.60997958,17.9886908 L0,17.9886908 L0,14.7138849 L4.83081575,14.7138849 C4.51915022,13.2811573 4.25200833,11.825688 4.25200833,10.3929604 C4.25200833,4.04802398 8.68211126,0 15.6945857,0 C18.6554083,0 21.2823035,0.568542693 22.4621802,1.13708539 L22.4621802,5.32155961 C21.0819471,4.7075335 18.8780265,4.25269935 16.295655,4.25269935 C11.8878139,4.25269935 9.23865685,6.73154549 9.23865685,10.4384439 C9.23865685,12.0985885 9.50579874,13.4403493 9.81746427,14.7138849 L20.3695687,14.7138849 L20.3695687,17.9886908 L10.5966281,17.9886908 C10.7524609,18.8528757 10.86377,19.7852857 10.86377,20.8314043 C10.86377,24.4018524 9.43901326,27.1990825 7.10152177,28.2679427 L7.10152177,28.3816513 Z",
    transform: "translate(16 12)"
  }));
}

export default MoneyPound;