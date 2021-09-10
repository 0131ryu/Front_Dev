var x = 10;

var str = x.toString();
console.log(typeof str, str); //string 10

console.log(typeof x, x); //number 10

var x = 10;

var str = x + '';
console.log(typeof str, str); //string 10

console.log(typeof x, x); //number 10

console.log(1 + '2'); //12
console.log(`1 + 1 = ${1+1}`); //1 + 1 = 2

//암묵적 타입 변환을 수행 시 (문자타입)
console.log(0+''); //0
console.log(-0+''); //0
console.log(1+''); //1
console.log(-1+''); //-1
console.log(NaN+''); //NaN
console.log(Infinity+''); //Infinity
console.log(-Infinity+''); //-Infinity

console.log(true+''); //true
console.log(false+''); //false

console.log(null+''); //null

console.log(undefined+''); //undefined

//console.log((Symbol())+''); //undefined (오류발생)

console.log(({})+''); //[object Object]
console.log(Math+''); //[object Math]
console.log([]+''); //''
console.log([10, 20]+''); //10, 20
console.log((function(){})+''); //function(){}
console.log(Array+''); //function Array() { [native code] }

//숫자 타입 변환
console.log('1' > 0); //true

console.log(+''); //0
console.log(+'0'); //0
console.log(+'1'); //1
console.log(+'string'); //NaN

console.log(+true); //1
console.log(+false); //0

console.log(+null); //0
console.log(+undefined); //NaN

//console.log(+Symbol()); //오류발생

console.log(+{}); //NaN
console.log(+[]); //0
console.log(+[10, 20]); //NaN
console.log(+(function(){})); //NaN

//boolean 타입 변환

if('') console.log(x);

if('')  console.log('1'); //''
if(true) console.log('2'); //2
if(0) console.log('3'); //''
if('str') console.log('4'); //4
if(null) console.log('5'); //''

if(!false)  console.log(false + ' is falsy value'); //false is falsy value
if(!undefined) console.log(undefined + ' is falsy value'); //undefined is falsy value
if(!null) console.log(null + ' is falsy value'); //null is falsy value
if(!0) console.log(0 + ' is falsy value'); //0 is falsy value
if(!NaN) console.log(NaN + ' is falsy value'); //NaN is falsy value
if(!'') console.log('' + ' is falsy value'); // is falsy value

//True & False

function isFalsy(v) {
    return !v;
}

function isTruthy(v) {
    return !!v;
}

isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy('');

isTruthy(true);
isTruthy('0');
isTruthy({});
isTruthy([]);