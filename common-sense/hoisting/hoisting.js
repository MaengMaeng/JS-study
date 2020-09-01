foo1(); // foo1
foo2(); // foo2 is not function

function foo1(){
	console.log('foo1');
}

var foo2 = function() {
	console.log('foo2');
}