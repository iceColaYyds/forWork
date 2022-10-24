class Contain {
  // 静态方法,省略new关键词创造对象
  static of(val) {
    return new Contain(val);
  }
  constructor(val) {
    this._val = val;
  }
  // map 方法，传入变形关系，将容器里的每一个值映射到另一个容器
  map(fn) {
    return Contain.of(fn(this._val));
  }
}

const c = Contain.of(5)
  .map((x) => x + 2)
  .map((x) => x * x);
console.log(c);
