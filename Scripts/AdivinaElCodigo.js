let targetNum = Math.floor(Math.random() * (99999 - 10000 +1) + 10000);
console.log(targetNum);
let separatedTarget = targetNum.toString().split('');
console.log(separatedTarget)

function onGuess(){
    let guess = document.getElementById("numInputBox").value;
    console.log(guess);
    document.getElementById("numInputBox").value = '';
    if(checkValid(guess)){

        let separatedGuess = guess.split('');
        console.log(separatedGuess)

        if(checkEqual(separatedGuess, separatedTarget)){
            win();
        }
        else{
            attempt();
        }
    }
    else{
        document.getElementById("message").value = "Valor no valido"
    }
    
    
}

function checkValid(guess){
    if(guess.length == 5){
        for(i = 0; i < guess.split(''); i++){
            if(!isInteger(guess[i])){
                return false;
            }
        }
    }
    else{
        return false;
    }
    return true;
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