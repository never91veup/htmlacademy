'use strict';

let userName = prompt('Введите имя пользователя:', '');
let userPassword;

if (userName === 'Админ') {
    userPassword = prompt('Введите пароль:', '');
    if (userPassword === 'Я главный') {
        alert('Здравствуйте!');
    }
    else if (userPassword === null || userPassword === '') {
        alert('Отменено');
    }
    else {
        alert('Неверный пароль');
    }
}
else if (userName === null || userName === '') {
    alert('Отменено');
}
else {
    alert('Я вас не знаю');
}