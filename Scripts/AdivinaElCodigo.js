let targetNum = Math.floor(Math.random() * (99999 - 10000 +1) + 10000);
console.log(targetNum);
let separatedTarget = targetNum.toString().split('');
console.log(separatedTarget)

function onGuess(){
    let guess = document.getElementById("numInputBox").value;
    console.log(guess.value);
    let separatedGuess = guess.split('');
    console.log(separatedGuess)
    
    if(checkEqual(separatedGuess, separatedTarget)){
        win();
    }
    else{
        attempt();
    }
    document.getElementById("numInputBox").value = '';
}
function checkEqual(array1, array2){
    let equal = true

    for(i = 0; i < array1.size(); i++){
        if(array1[i] != array2[i]){
            equal = false
        }
    }
    return equal;
}