alert('Welcome to the Number Guessing Game!');

let maxNumber = 5000;
let secretNumber = Math.floor(Math.random() * maxNumber + 1);
console.log(secretNumber);
let answer;
let attempts = 1;

while(answer != secretNumber){
    answer = parseInt(prompt(`Choose a number between 0 and ${maxNumber}`));
    if (secretNumber == answer) {
        break;
    } else {
        if(answer > secretNumber){
            alert('Secret number is smaller than the answer');
        } else{
            alert('Secret number is bigger than the answer');
        }
        attempts++;
    }
}

let wordAttempt = attempts > 1 ? 'attempts' : 'attempt'
alert(`Wow, Great Answer, Its correct!! ${secretNumber}. You got the answer with ${attempts} ${wordAttempt}.`);

// if (attempts == 1){
//     alert(`Wow, Great Answer, Its correct!! ${secretNumber}. You got the answer with ${attempts} attempt` );
// }else{
//     alert(`Wow, Great Answer, Its correct!! ${secretNumber}. You got the answer with ${attempts} attempts` );
// }
