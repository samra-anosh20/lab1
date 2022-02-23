//Write a JavaScript program where the program takes a random integer between 1 to 10, 
//the user is then prompted to input a guess number. If the user input matches with guess number, 
//the program will display a message "You WIN" otherwise display a message "Not matched".

const ranNum = Math.floor(Math.random() * 10);
const guessNum = prompt("Guess the Number: ");
if (guessNum == ranNum) {
    alert(`You WIN`);
} else {
    alert(`Not Matched. The Number is '${ranNum}'.`);
}

