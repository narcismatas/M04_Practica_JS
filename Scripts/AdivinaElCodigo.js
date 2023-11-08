let targetNum = Math.floor(Math.random() * (99999 - 10000 +1) + 10000);
console.log(targetNum);
let separatedTarget = targetNum.toString().split('');
console.log(separatedTarget);
let guessNum = 0;
let guessArea = document.getElementById("guesses");
let won = false;
let delay = 100;

function onGuess(){
    let guess = document.getElementById("numInputBox").value;
    
    document.getElementById("numInputBox").value = '';
    if(checkValid(guess) && !won){
        guessNum++;
        let separatedGuess = guess.split('');
        console.log(separatedGuess);
        console.log(guess);
        if(checkEqual(separatedGuess, separatedTarget)){
            win(separatedGuess);
        }
        else{
            if (guessNum <= 5){
                attempt(separatedGuess);
            }
        }
    }
    else{
        if(won){
            document.getElementById("message").innerText = "Ya ganaste!"           
        }
        else if(guessNum < 5){
            switch(guessNum){
                case 0:
                    document.getElementById("message").innerText = "Valor inválido. Sigues en el primer intento.";
                    break;
                case 1:
                    document.getElementById("message").innerText = "Valor inválido. Tienes 4 intentos restantes";
                    break;
                case 2:
                    document.getElementById("message").innerText = "Valor inválido. Tienes 3 intentos restantes";
                    break;
                case 3:
                    document.getElementById("message").innerText = "Valor inválido. Tienes 2 intentos restantes";
                    break;
                case 4:
                    document.getElementById("message").innerText = "Valor inválido. Estas en el ultimo intento";
                    break;
            }
            //document.getElementById("message").innerText = "Valor inválido. Sigues en el primer intento."
        }
        else{

        }
    }
}



function win(userGuess){
    document.getElementById("message").style.backgroundColor = "green";
    document.getElementById("message").innerText = "Felicidades! Has acertado."
    const guessedNum = document.createElement("div");
    guessedNum.className = 'numDisplay';
    const guessRow = document.getElementById("guesses").appendChild(guessedNum);
    
    for (i = 0; i < 5; i++){
        let digit = document.createElement("div")
        digit.className = 'guessDigitGreen'
        digitText = document.createElement("p");
        digitText.innerText = userGuess[i];
        digit.appendChild(digitText);
        guessRow.appendChild(digit);
        document.getElementsByName("secretdigit")[i].innerHTML = separatedTarget[i]
    }

    

    won = true
}

function attempt(userGuess){

    const guessedNum = document.createElement("div");
    guessedNum.className = 'numDisplay';
    const guessRow = document.getElementById("guesses").appendChild(guessedNum);

    for (i = 0; i < 5; i++){
        
        let state = "Gray";
        for (j = 0; j < 5; j++){
            if(userGuess[i] == separatedTarget[j] && i == j){
                state = "Green";
            }
            else if(state != "Green" && userGuess[i] == separatedTarget[j]){
                state = "Yellow";
            }
        }

        let digit = document.createElement("div")
        switch(state){
            case "Gray":
                digit.className = 'guessDigitGray';
                break;
            case "Yellow":
                digit.className = 'guessDigitYellow';
                break;
            case "Green":
                digit.className = 'guessDigitGreen';
                break;
        }
        
        digitText = document.createElement("p");
        digitText.innerText = userGuess[i];
        digit.appendChild(digitText);
        guessRow.appendChild(digit);
        
    }
    switch(guessNum){
        case 1:
            document.getElementById("message").innerText = "4 intentos restantes";
            break;
        case 2:
            document.getElementById("message").innerText = "3 intentos restantes";
            break;
        case 3:
            document.getElementById("message").innerText = "2 intentos restantes";
            break;
        case 4:
            document.getElementById("message").innerText = "Último intento";
            break;
        case 5:
            document.getElementById("message").innerText = "Vaya, no lo acertaste";
            fail()
            break;

    }
    
}

function fail(){
    for(i = 0; i < 5; i++){
        document.getElementsByName("secretdigit")[i].innerHTML = separatedTarget[i]
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
        attempt
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