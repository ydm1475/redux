class Store {
    state;
    reduer;
      listens = [];
    constructor(reduer) {
      this.reduer = reduer;
      this.dispatch({ type: "@@redux/INIT" });
    }
  
      dispatch = (action) => {
      var newState = this.reduer(this.state, action);
      this.state = newState;
      this.listens.forEach((fn) => fn(this.state));
    }
  
    subscribe = (callback) => {
      this.listens.push(callback);
    }
  
    getState = () =>{
      return this.state;
    }
  }