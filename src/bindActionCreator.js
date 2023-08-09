function bindActionCreator(actionCreators, dispatch) {
  if (typeof actionCreators == "function") {
    actionCreators = [actionCreators];
  }
  for (let key in actionCreators) {
    let preFn = actionCreators[key];

    actionCreators[key] = function(...args) {
      dispatch(preFn.apply(this, args));
    };
  }
}

export default bindActionCreator;
