// 7. A teacher also wants to mark students who get a perfect score of 11.
//     * Extend the function so that it returns "Perfect" for a score of 11.

export function rubricPerfect(score) {
    if(score<=11 && score>=0){
        if(score == 11){
            return 'Perfect'
        }
        else if(score>8){
            return 'Excellent'
        }
        else if(score>=5){
            return 'Pass'
        }
        else{
            return 'Fail'
        }
    }
    else{
        return 'Score out of range'
    }
}
const scorePerfect = rubricPerfect(process.argv[3])
console.log(scorePerfect)