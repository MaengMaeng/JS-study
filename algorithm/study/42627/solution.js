function solution(jobs) {
    let answer = 0;
    let time = 0;
    
    const schedule = [];
    const jobsArray = jobs.slice();
    const length = jobs.length;
    
    // 시작해야 되는 시간 순으로 정렬
    jobsArray.sort((a,b) => {
        if(a[0] - b[0] === 0){

            // 시작시간이 겹치면 빨리 끝나는 순으로 정렬했습니다.
            return a[1] - b[1];
        }
        
        return a[0] - b[0]
    });

    schedule.push(jobsArray.shift());

    while(schedule.length !== 0){
        // 일 수행
        let job = schedule.shift();
        answer += (job[0] > time ? 0 : time - job[0]) + job[1];

        // 일이 끝나게 되는 시간
        time += (job[0] > time ? job[0] - time : 0) + job[1];

        // 일 중 들어온 job
        while(jobsArray.length > 0){
            if(jobsArray[0][0] <= time){
                schedule.push(jobsArray.shift());
            }
            else break;
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

const input = [[0, 1], [13, 1]];

console.log(solution(input));