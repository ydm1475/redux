function bindActionCreator(actionCreators, dispatch) {
  if (typeof actionCreators == "function") {
    return function (...args) {
      dispatch(actionCreators.apply(this, args));
    };
  }

  if (typeof actionCreators !== "object") {
    console.log("数据格式有误，请检查相关参数");
    return;
  }

  for (let key in actionCreators) {
    let preFn = actionCreators[key];

    actionCreators[key] = function (...args) {
      dispatch(preFn.apply(this, args));
    };
  }
}

export default bindActionCreator;
