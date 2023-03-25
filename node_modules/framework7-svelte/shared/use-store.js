// eslint-disable-next-line
import { onDestroy } from 'svelte';
import { f7 } from './f7.js';
export const useStore = function () {
  // (store, getter, callback)
  let store = arguments.length <= 0 ? undefined : arguments[0];
  let getter = arguments.length <= 1 ? undefined : arguments[1];
  let callback = arguments.length <= 2 ? undefined : arguments[2];

  if (arguments.length === 1) {
    // (getter)
    store = f7.store;
    getter = arguments.length <= 0 ? undefined : arguments[0];
  } else if (arguments.length === 2 && typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
    // (getter, callback)
    store = f7.store;
    getter = arguments.length <= 0 ? undefined : arguments[0];
    callback = arguments.length <= 1 ? undefined : arguments[1];
  } // eslint-disable-next-line


  const obj = store._gettersPlain[getter];
  const value = obj.value;

  if (callback) {
    obj.onUpdated(callback);
  }

  onDestroy(() => {
    if (callback) {
      // eslint-disable-next-line
      store.__removeCallback(callback);
    }
  });
  return value;
};