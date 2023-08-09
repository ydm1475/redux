function combineReducers(reducerMap) {
  return function reducer(state = {}, action) {
    var newStae = {};
    for (var key in reducerMap) {
      const reducer = reducerMap[key];
      newStae[key] = reducer(state[key], action);
    }

    return newStae;
  };
}

export default combineReducers;
