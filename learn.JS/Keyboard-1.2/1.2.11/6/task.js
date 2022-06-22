'use strict';

let age = prompt('Введите возраст:', '');

if ((age >= 14) && (age <= 90)) {
    alert('Вы проходите!');
}
else {
    alert('Уже не вариант!');
}