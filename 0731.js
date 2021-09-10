console.log(typeof('')); //string
console.log(typeof(1)); //number
console.log(typeof(NaN)); //number
console.log(typeof(true)); //boolean
console.log(typeof(undefined)); //undefined
console.log(typeof(Symbol())); //symbol
console.log(typeof(null)); //object
console.log(typeof([])); //object
console.log(typeof({})); //object
console.log(typeof(new Date()));//object
console.log(typeof(/test/gi));//object
console.log(typeof(function() {})); //function

//null값은 확인 못함 -> typeof 대신 === 사용
var foo = null;

console.log(typeof(foo) === null); //false
console.log(foo === null); //true

console.log(typeof(undeclared)); //undefined

//지수 연산자
console.log(2 ** 2); //4
console.log(2 ** 2.5); //5.65685424949238
console.log(2 ** 0); //1
console.log(2 ** -2); //0.25

console.log(Math.pow(2, 2)); //4
console.log(Math.pow(2, 2.5)); //5.65685424949238
console.log(Math.pow(2, 0)); //1
console.log(Math.pow(2, -2)); //0.25

console.log(2 ** 2 ** 2); //16
console.log(Math.pow(Math.pow(2, 2), 2)); //16

console.log((-5) ** 2); //25 -값은 ()로 묶어줄 것

var num = 5;
console.log(num **= 2); //25

console.log(2 * 5 ** 2); //50

//연산자의 부수효과

var x;

x = 1;
console.log(x); //1

x++;
console.log(x); //2

var o = { a: 1};

delete o.a;
console.log(o); //{}

//연산자 우선순위
console.log(10 * (2+3)); //50