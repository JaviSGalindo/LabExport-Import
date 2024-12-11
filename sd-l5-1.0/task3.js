export function ageCalculator(year, month, day) {
    const dateToday = new Date();
    const inputBirthday = new Date(year, month - 1, day);

    let age = dateToday.getFullYear() - inputBirthday.getFullYear();
    const hasBirthdayPassed = 
        dateToday.getMonth() > inputBirthday.getMonth() || 
        (dateToday.getMonth() === inputBirthday.getMonth() && dateToday.getDate() >= inputBirthday.getDate());

    if (!hasBirthdayPassed) {
        age--;
    }
    return age
}
const age = ageCalculator(process.argv[3], process.argv[4], process.argv[5])
console.log(age)