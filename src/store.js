class Store {
  state = undefined;
  reduer = () => {};
  listens = [];
  constructor(reduer, initState) {
    this.reduer = reduer;
    this.state = initState;
  }

  // 采用箭头函数，里面的this会一直指向Store的实例
  // dispatch的作用
  dispatch = (action) => {
    var newState = this.reduer(this.state, action);
    this.state = newState;
    // console.log('原生dispatch')
    this.listens.forEach((fn) => fn(this.state));
  };

  //监听函数
  subscribe = (callback) => {
    this.listens.push(callback);
  };

  getState = () => {
    return this.state;
  };
}

export default Store;
