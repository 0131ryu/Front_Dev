5*4 //20

'My name is' + 'Lee' //My name is Lee

color = 'red'; //'red'

3 > 5 //false

true && false //false

typeof 'Hi' //string

console.log(5+2); //7
console.log(5-2); //3
console.log(5*2); //10
console.log(5/2); //2.5
console.log(5%2); //1

var x = 1;

x++;
console.log(x);

x--;
console.log(x);

var x = 5, result;

result = x++; //선할당 후증가
console.log(result, x); //5 6

result = ++x; //선증가 후할당
console.log(result, x); //7 7

result = x--; //선할당 후감소
console.log(result, x); //7 6

result = --x; //선감소 후할당
console.log(result, x); //5 5

var y = 1;

console.log(+y); //1
console.log(y); //"1"

x = true;
console.log(+x); //1
console.log(x); //true

x= false;
console.log(+x);
console.log(x); //false

x = 'Hello';
console.log(+x); //NaN
console.log(x); //Hello


console.log(-(-10)); //10
console.log(-'10'); //-10
console.log(-true); //-1
console.log(-'Hello'); //NaN

//문자열 연결 연산자

console.log('1' + 2); //12
console.log(1 + '2'); //12

console.log(1+2); //3

console.log(1+true); //2
console.log(1+false); //1
console.log(1+null); //1
console.log(+undefined); //NaN
console.log(1+undefined); //NaN

var y;

y = 10;
console.log(y);

y += 5;
console.log(y); //15

y -= 5;
console.log(y); //10

y *= 5;
console.log(y); //50

y /= 5;
console.log(y); //10

y %= 5;
console.log(y); //0

var str = 'My name is ';
str += 'Lee';
console.log(str); //My name is Lee

var k;

console.log(k = 10); //10

var a, b, c;

a = b = c = 0;

console.log(a, b, c); //0 0 0 