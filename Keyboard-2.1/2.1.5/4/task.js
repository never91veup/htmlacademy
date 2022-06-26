alert(document.constructor.name); // HTMLDocument

alert(HTMLDocument.prototype.constructor === HTMLDocument); // true

alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node