function createStore(reducer, enstrue) {
    return enstrue(function (reducer) {
        return new Store(reducer);
    })(reducer);
}

export default createStore;