function makeUser() {
    return {
        name: "Джон",
        ref: this
    };
};
  
let user = makeUser();
  
alert( user.ref.name ); // Каким будет результат? - Ошибка, this == undefined


// function makeUser() {
//     return {
//         name: "Джон",
//         ref() {
//             return this;
//         }
//     };
// };
  
// let user = makeUser();
  
// alert( user.ref().name ); // Джон