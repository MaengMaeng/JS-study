function solution(n, times) {
    const length = times.length;
    const newTimes = [];

    for(let i = 0; i < length; i++){
        newTimes.push([times[i],times[i]]);
    }

    const comp = (a, b) => {
        if(a[1] === b[1]) return a[0] - b[0];

        return a[1] - b[1]; 
    }

    let time;
    for(let j = 0;j < n; j++){
        newTimes.sort(comp);
        newTimes[0][1] += newTimes[0][0];
        time = newTimes[0];
    }

    return time[1] - time[0];
}

const input = [6, [7, 10]];
console.log(solution(...input));