function solution(phone_number) {
    var answer = '';
    let len = phone_number.length
    answer = "*".repeat(len-4) + phone_number.slice(-4);
    
    
    return answer;
}