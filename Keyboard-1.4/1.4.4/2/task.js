let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object] // this ссылается на объект перед точкой

(obj.go)();             // (2) [object Object] // аналогично

(method = obj.go)();    // (3) undefined // функция срабатывает, без передачи значения this

(obj.go || obj.stop)(); // (4) undefined // потеря значения this