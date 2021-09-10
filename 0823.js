var string = 'Hello world';
var search = 'l';
var count = 0;

for(var i = 0; i< string.length; i++) {
    if(string[i] !== search)
    continue;
    count++; //countinue문 실행시 count++는 실행x
}

console.log(count); //3

const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length); //3

for(var i = 0; i<string.length; i++) {
    if(string[i] === search)
    count++;
}


//continue없는 if
for (var i = 0; i< string.length; i++) {
    if(string[i] === search) {
        count++;
        //추가 코드
    }
}

//continue 있는 if
for (var i = 0; i< string.length; i++) {
    if(string[i] === search) 
        continue;
        count++;
        //추가 코드
    
}