function solution(number, limit, power) {
    var answer = 0;
    
    for(let i=1; i<=number; i++){
        let count = 0
        let sqrtNumber = Math.sqrt(i)
        for(let j=1; j<=sqrtNumber;j++){
            if(i%j === 0){
            count++
            if(j !== i /j){count++}
            }}
        
        if(count > limit){
            answer+= power
        } else {
            answer+=count
        }
    }
    
    return answer;
}