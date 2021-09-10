var foo = true;
console.log(foo);

foo = false;
console.log(foo);

var test;
console.log(test); //undefined

var test2 = 'Lee';
test2 = null;
console.log(test2); //null

var key = Symbol('key');
console.log(typeof key); //symbol

var obj = {};

obj[key] = 'value';
console.log(obj[key]); //value

