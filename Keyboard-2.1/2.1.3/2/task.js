// Если elem – произвольный узел DOM-элемента…

// Правда, что elem.lastChild.nextSibling всегда равен null?
// Правда, что elem.children[0].previousSibling всегда равен null ?

// Да. Верно. Элемент elem.lastChild всегда последний,
// у него нет ссылки nextSibling.
// Нет. Неверно. Потому что elem.children[0] – потомок-элемент.
// Но перед ним могут быть другие узлы.