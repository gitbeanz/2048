function startNewGame(){
    var gameSquares = document.querySelectorAll("[id='game-square']");
    for (let i = 0; i < gameSquares.length; i++){
        gameSquares[i].innerHTML = "";
        gameSquares[i].style.backgroundColor = "#CDC1B4"
    }
    var firstNum = getFirstNumber();
    console.log(firstNum);
    var secondNum = getSecondNumber(firstNum);
    console.log(secondNum);
   
    gameSquares[firstNum].innerHTML = "2";
    gameSquares[firstNum].style.backgroundColor = "#EEE4DA"
    gameSquares[firstNum].style.color = "#776E65"
    gameSquares[secondNum].innerHTML = "2";
    gameSquares[secondNum].style.backgroundColor = "#EEE4DA"
    gameSquares[secondNum].style.color = "#776E65"
}

function getFirstNumber(){
    return Math.floor(Math.random()*16) + 0;
}

function getSecondNumber(firstNum){
    var secondNumFound = false;
    while (secondNumFound === false){
        var secondNum = Math.floor(Math.random() * 16) + 0;
        if (secondNum !== firstNum){
            secondNumFound = true;
        }
    }
    return secondNum;
}