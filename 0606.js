var string;
string = '문자열';
string = "문자열";
string = `문자열`;

//작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열로 인식함
//큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식함

//var hello = hi; //따옴표로 감싸지 않은 hi는 식별자로 인식함 

var template = 'Tempalte literal';
console.log(template);

// var str = 'Hello 
// world.'; -> 줄바꿈 허용 x

var str = 'hello\nWorld!';
console.log(str);

var templates = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(templates);

var templates2 = `<ul>
    <li><a href="#">Home</a></li>
</ul>`;
console.log(templates2);

var first = 'Ung-mo';
var last = 'Lee';

console.log('My name is ' + first + ' ' + last + '.');
console.log(`My name is ${first} ${last}.`);

console.log(`1 + 2 = ${1 + 2}`);
console.log('1 + 2 = ${1 + 2}');