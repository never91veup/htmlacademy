let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt("Введите a:", '');
    this.b = +prompt("Введите b:", '');
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
