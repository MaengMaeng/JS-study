var i;
for(i = 0; i < 10; i++){
    setTimeout(function() {
        console.log(i);
    }, 100);
} // 10, 10, 10, 10, 10, 10, 10, 10, 10, 10

var j;
for(j = 0; j < 10; j++){
    (function(i){
        setTimeout(function(){
            console.log(i);
        }, 100);
    })(j);
} // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 