// const obj = function() {
//     var x = 'x';
//     function y () {
//         console.log(x);
//     }

//     return {y};
// }

// const newObj = obj();

// newObj.y();

const obj2 = {
    name: 'foo'
};

function foo(args){
    console.log(this.name, args);
}

console.log(foo.bind(obj2));
foo.bind(obj2)(1);
