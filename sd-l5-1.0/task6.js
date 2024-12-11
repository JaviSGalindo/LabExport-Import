// 6. A teacher also wants to mark students who get a high score of 9 or more.
//     * Extend the function so that it returns "Excellent" for scores greater than 8.


export function rubricExcellent(score) {
    if(score<=11 && score>=0){
        if(score>8){
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
const scoreExcellent = rubricExcellent(process.argv[3])
console.log(scoreExcellent)