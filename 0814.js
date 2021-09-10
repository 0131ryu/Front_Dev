var count = 0;

while(count < 3) {
    console.log(count); //0 1 2
    count++;
}

//무한루프

// while ( true ) {

// }

var count = 0;

while(true) {
    console.log(count);
        count++;
    if(count === 3)
        break;
} //0 1 2


//do while

var count = 0;

do {
    console.log(count);
    count++;
} while (count < 3);


//break
if(true) {
    break;
}

foo: console.log('foo');

foo: {
    console.log(1);
    break foo;
    console.log(2);
}

console.log('Done!');


outer: for(var i = 0; i<3; i++) {
    for(var j = 0; j < 3; j++) {
        if(i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}

console.log('Done');


var string = 'Hello World!';
var search = 'l';
var index;

for (var i = 0; i<string.length; i++) {
    if(string[i] === search) {
        index = i;
        break;
    }
}

console.log(index); //2
console.log(string.indexOf(search)); //2
