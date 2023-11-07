let targetNum = Math.floor(Math.random() * (99999 - 10000 +1) + 10000);
console.log(targetNum);
let separatedTarget = targetNum.toString().split('');
console.log(separatedTarget)
function onGuess(){
    let guess = document.getElementById("numInputBox");
    console.log(guess.value);
    let separatedGuess = guess.value.split('');
    console.log(separatedGuess)
    guess.value = '';
    if(separatedGuess == separatedTarget){
        win();
    }
    else{
        attempt();
    }
}