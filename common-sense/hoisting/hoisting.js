foo1(); // foo1
// foo2(); // foo2 is not function

var foo1;

function foo1(){
	console.log('foo1');
}

var foo2 = function() {
	console.log('foo2');
}

foo1 = 'a';

console.log(typeof foo1);