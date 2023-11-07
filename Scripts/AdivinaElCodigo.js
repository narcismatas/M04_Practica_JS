let targetNum = Math.floor(Math.random() * (99999 - 10000 +1) + 10000);
console.log(targetNum);
let separatedTarget = targetNum.toString().split('');
console.log(separatedTarget)
let attempt = 0;

function onGuess(){
    let guess = document.getElementById("numInputBox").value;
    
    document.getElementById("numInputBox").value = '';
    if(checkValid(guess)){

        let separatedGuess = guess.split('');
        console.log(separatedGuess)
        console.log(guess);
        if(checkEqual(separatedGuess, separatedTarget)){
            win();
        }
        else{
            attempt();
        }
        attempt++;
    }
    else{
        document.getElementById("message").innerText = "Valor inválido. Sigues en el primer intento."
    }
}

function checkValid(guess){
    if(guess.length == 5){
        let splitguess = guess.split('')
        for(i = 0; i < 5; i++){
            if(!Number.isInteger(parseInt(splitguess[i]))){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

function checkEqual(array1, array2){
    let equal = true
    for(i = 0; i < 5; i++){
        if(array1[i] != array2[i]){
            equal = false
        }
    }
    return equal;
}