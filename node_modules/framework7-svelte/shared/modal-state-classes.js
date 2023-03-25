export const modalStateClasses = function (_temp) {
  let {
    isOpened,
    isClosing
  } = _temp === void 0 ? {} : _temp;
  return {
    'modal-in': isOpened && !isClosing,
    'modal-out': isClosing
  };
};