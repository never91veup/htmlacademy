function sayHi() {
    alert( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "Вася"
  });
  
  alert( bound.test ); // undefined, результатом работы bind
//                        является другой объект, а у него уже нет свойства test