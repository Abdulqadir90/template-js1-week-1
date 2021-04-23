var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function change(word) {
    return word.toUppercase();

}

function shoutyGreeting(name) {
    let greeting = `HELLO ${name}`;
    return greeting
}

console.log(shoutyGreeting(mentor1.toUpperCase()))
console.log(shoutyGreeting(mentor2.toUpperCase()))
console.log(shoutyGreeting(mentor3.toUpperCase()))
console.log(shoutyGreeting(mentor4.toUpperCase()))
console.log(shoutyGreeting(mentor5.toUpperCase()))