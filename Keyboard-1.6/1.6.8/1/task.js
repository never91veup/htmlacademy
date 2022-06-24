function printNumbers(from, to) {
  let current = from;

  function go() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }

  go();
  let timerId = setInterval(go, 1000);
}
  
// использование:
printNumbers(5, 10);

//   function printNumbers(from, to) {
//     let current = from;
  
//     setTimeout(function go() {
//       alert(current);
//       if (current < to) {
//         setTimeout(go, 1000);
//       }
//       current++;
//     }, 1000);
//   }
  
//   // использование:
//   printNumbers(5, 10);