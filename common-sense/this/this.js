function 외부함수(){
    console.log('함수 호출', this === global);

    function 내부함수(){
        console.log('내부 함수', this === global);
    }

    내부함수();
}

외부함수();

var 오브젝트 = {
    메소드: function(){
        console.log('메소드', this === global);

        function 메소드_내부함수(){
            console.log('메소드 내부함수', this === global);
        }

        메소드_내부함수();
    }
};

오브젝트.메소드();
