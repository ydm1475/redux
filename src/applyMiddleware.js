import compose from "./compose.js";
/**
 * 
 * @param  {...any} middWares 
 * function logger(store) {
      return (next) => (action) => {
        // 这里的next是我们的dispatch
        let returnValue = next(action);

        return returnValue;
      };
    }
 * 上述的【logger】可作为applyMiddleware的参数
 * 
 */
function applyMiddleware(...middWares) {
  return function (createStore) {
    return function (reducer) {
      // 创建仓库store实例
      var store = createStore(reducer);
      // middWare(store)返回的是(next) => (action) => {}
      // 例如chin返回的为[fn1, fn2]，则fn1和fn2的结构均为(next) => (action) => {}
      var chin = middWares.map((middWare) => middWare(store));

      // compose(...chin)得到的是(args) => fn1(fn2(args))
      var newDispatchGen = compose(...chin);
      // newDispatch为fn1(fn2(store.dispatch))
      // fn2(store.dispatch)返回的是 (action) => {}，与此同时表明了fn2中的next为原生store.dispatch
      // fn1(fn2(store.dispatch))则代表fn1中的action为fn2返回值。
      // 所以最终newDispatch就为fn2中定义的 (action) => {};
      const newDispatch = newDispatchGen(store.dispatch);

      store.dispatch = newDispatch;

      return store;
    };
  };
}

export default applyMiddleware;
