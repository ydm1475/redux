function applyMiddleware(...middWares) {
    return function(createStore) {
      return function(reducer) {
        var store = createStore(reducer);
        var chin = middWares.map((middWare) => middWare(store));
  
        var newDispatchGen = compose(...chin);
        const newDispatch = newDispatchGen(store.dispatch);
        return { ...store, dispatch: newDispatch };
      };
    };
}
  
export default applyMiddleware;