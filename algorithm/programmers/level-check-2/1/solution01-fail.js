function solution(land) {
    let answer = 0;

    let i, sumArray = [], indexArray = [];
    
    const max = function(land, i){
        let currentIndex, max = 0, maxIndex;
    
        for(currentIndex = 0; currentIndex < land.length; currentIndex++){
            if(currentIndex !== i && land[currentIndex] > max){
                maxIndex = currentIndex;
                max = land[maxIndex];
            }
        }

        return maxIndex;    
    }
    const max2 = function(land, i, j){        
        let arr = [0,1,2,3];
        let arr2 = arr.map((c) => {
            if(c !== i && c !== j){
                return c;
            }
        })
        
        return land[arr[0]] > land[arr[1]] ? arr[0] : arr[1];
    }
    
    indexArray.push(-1);
    sumArray.push(0);
    
    indexArray.push(max(land[0]));
    sumArray.push(land[0][indexArray[1]]);
    
    let currentSum1, currentSum2, indexSum1, indexSum2, indexSum3;
    
    for(i = 1; i < land.length; i++){
        indexSum1 = max(land[i],indexArray[i]);
        currentSum1 = sumArray[i] + land[i][indexSum1];
        
        indexSum2 = max2(land[i - 1], indexArray[i - 1], indexArray[i])
        indexSum3 = max(land[i], indexSum2);
        
        currentSum2 = sumArray[i-1] + land[i - 1][indexSum2] + land[i][indexSum3];
        
        if(currentSum1 > currentSum2){
            sumArray.push(currentSum1);
            indexArray.push(indexSum1);
        }
        else{
            sumArray.push(currentSum2);
            indexArray.push(indexSum3);
        }
    }

    answer = sumArray.pop();
    
    return answer;
}