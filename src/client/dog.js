class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Chooo wah, I am ${this.name}`;
  }
}


module.exports = Dog;