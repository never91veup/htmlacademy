function f() {
    try {
      alert('начало');
      return "result";
    } catch (e) {
      /// ...
    } finally {
      alert('очистка!');
    }
  }
  
  f(); // очистка!

//   function f() {
//     try {
//       alert('начало');
//       throw new Error("ошибка");
//     } catch (e) {
//       // ...
//       if("не могу обработать ошибку") {
//         throw e;
//       }
  
//     } finally {
//       alert('очистка!')
//     }
//   }
  
//   f(); // очистка!


// Именно finally гарантирует очистку