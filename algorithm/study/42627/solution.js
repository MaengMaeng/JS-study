function solution(jobs) {
    let answer = 0;
    
    const schedule = [];
    const jobsArray = jobs.slice();
    
    jobsArray.sort((a,b) => {
        if(a[0] - b[0] === 0){
            return a[1] - b[1];
        }
        
        return a[0] - b[0]
    });
    const length = jobs.length;

    schedule.push(jobsArray.shift());

    let time = 0;

    while(schedule.length !== 0){
        // 일 수행
        let job = schedule.shift();
    
        answer += (job[0] > time ? 0 : time - job[0]) + job[1];
        time += (job[0] > time ? job[0] - time : 0) + job[1];


        // 일 중 들어온 job
        while(jobsArray.length > 0){
            if(jobsArray[0][0] <= time){
                schedule.push(jobsArray.shift());
            }
            else{
                break;
            }
        }


        // 짧은 순으로 정렬
        schedule.sort((a,b) => a[1] - b[1]);


        // 만약 일이 없으면 가장 먼저 들어온 일을 schedule에 넣기
        if(schedule.length === 0 && jobsArray.length !== 0){
            schedule.push(jobsArray.shift());
        }
    }

    return Math.floor(answer/length);
}

const input = [[0, 1], [13, 1]]		;

console.log(solution(input));