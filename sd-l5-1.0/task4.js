

export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;

        this.returnAge = function(){
            const dateToday = new Date();
            const inputBirthday = new Date(this.year, this.month - 1, this.day);

            let age = dateToday.getFullYear() - inputBirthday.getFullYear();
            const hasBirthdayPassed = 
             dateToday.getMonth() > inputBirthday.getMonth() || 
            (dateToday.getMonth() === inputBirthday.getMonth() && dateToday.getDate() >= inputBirthday.getDate());

            if (!hasBirthdayPassed) {
             age--;
            }

            return `${this.name} is ${age} today!`
        }
      }
    
}
const age = new FriendAge(process.argv[3], process.argv[4], process.argv[5])
console.log(age)