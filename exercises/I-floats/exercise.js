var numberOfStudents = 15;
var numberOfMentors = 8;
let total = numberOfStudents + numberOfMentors;
let studentsConverted = numberOfStudents/total*100;
let mentorsConverted = numberOfMentors/total*100;

let percentageStudents = Math.round(studentsConverted);
// console.log(percentageStudents)
let percentageMentors = Math.round(mentorsConverted)
// console.log(percentageMentors)

console.log(`Percentage students: ${percentageStudents} %`)
console.log(`Percentage mentors: ${percentageMentors} %`)
