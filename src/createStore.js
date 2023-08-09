import Store from "./store.js";

function createStore(reducer, initState, enstrue) {
  if (enstrue) {
    return enstrue(function (reducer) {
      return new Store(reducer, initState);
    })(reducer);
  }

  return new Store(reducer, initState);
}

export default createStore;
