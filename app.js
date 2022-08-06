var gameSquares = document.querySelectorAll("[id='game-square']");
score = 0;
document.addEventListener("keydown",function(event){
    event.preventDefault();
    const key = event.key;
    switch (key){
        case "ArrowLeft":
            moveLeft(gameSquares, false);
            break;
        case "ArrowRight":
            moveRight(gameSquares, false);
            break;
        case "ArrowUp":
            moveUp(gameSquares, false);
            break;
        case "ArrowDown":
            moveDown(gameSquares, false);
            break;
    }
});

//TODO: Make a function once things are merged called Fill in Gaps, which checks for gaps made by merging and fills them, essentially moving towards the direction again.
//TODO: fix spawning (can only be done if a move is valid)


function startNewGame(){
    var gameSquares = document.querySelectorAll("[id='game-square']");
    score = 0;
    scoreText = document.querySelector("#score-text");
    scoreText.innerHTML = score;
    scoreText.style.fontSize = "2rem";
    scoreText.style.bottom = "35px";
    for (let i = 0; i < gameSquares.length; i++){
        gameSquares[i].innerHTML = "";
        gameSquares[i].style.backgroundColor = "#CDC1B4"
        if (gameSquares[i].classList.contains("taken")){
            gameSquares[i].classList.toggle("taken");
        }
    }
    var firstNum = getFirstNumber();
    console.log(firstNum+1);
    var secondNum = getSecondNumber(firstNum);
    console.log(secondNum+1);
    if (isFour()){
        gameSquares[firstNum].innerHTML = "4";
        gameSquares[firstNum].style.backgroundColor = "#EEE1C9";
        gameSquares[firstNum].style.color = "#776E65";
    }else{
    gameSquares[firstNum].innerHTML = "2";
    gameSquares[firstNum].style.backgroundColor = "#EEE4DA"
    gameSquares[firstNum].style.color = "#776E65"
    }
    gameSquares[firstNum].classList.toggle("taken");
    if (isFour()){
        gameSquares[secondNum].innerHTML = "4";
        gameSquares[secondNum].style.backgroundColor = "#EEE1C9";
        gameSquares[secondNum].style.color = "#776E65";
    }
    else{
    gameSquares[secondNum].innerHTML = "2";
    gameSquares[secondNum].style.backgroundColor = "#EEE4DA";
    gameSquares[secondNum].style.color = "#776E65";
    }
    gameSquares[secondNum].classList.toggle("taken"); 
}

function getFirstNumber(){
    return Math.floor(Math.random() * 16) + 0;
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

function isFour(){
    return (Math.floor(Math.random() * 10) == 4)
}

function moveLeft(gameSquares, checkGap){
    var pieceSwapped = false;
    console.log(gameSquares);
    for (let i = 0; i < gameSquares.length; i++){
        if (gameSquares[i].classList.contains("taken")){
            console.log("Scanning ", gameSquares[i].classList[0])
            console.log("gameSquares length: ", gameSquares.length)
            //check if it's leftmost
            if ((gameSquares[i].classList[0] === "1")||(gameSquares[i].classList[0] === "5")||(gameSquares[i].classList[0] === "9")||(gameSquares[i].classList[0] === "13")){
                console.log("corner detected"); 
            }
            else{
                var targetSpot = 0;
                //find row
                console.log("not a corner");
                if (gameSquares[i].classList[1] === "1"){
                    console.log("row 1 detected");
                    targetSpot = 0;
                    console.log("we are at",i+1, " and we want to go to ", targetSpot + 1);
                    var newPosition = -1;
                    for (let j = i; j>targetSpot;j--){
                        //check if spaceFilledLeft
                        if (spaceFilled(gameSquares[j-1]) === true){
                            var newPosition = j;
                            break
                        }
                    }
                    if (newPosition == i){
                        ;
                    }
                    else{
                        if (newPosition < 0){
                            newPosition = targetSpot;
                        }
                    //swap with new position
                    oldValue = gameSquares[i].innerHTML;
                    oldColor = gameSquares[i].style.backgroundColor;
                    oldFont = gameSquares[i].style.color;
                    gameSquares[newPosition].innerHTML = oldValue;
                    gameSquares[newPosition].style.backgroundColor = oldColor;
                    gameSquares[newPosition].style.color = oldFont; 
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                    pieceSwapped = true;
                    }
                }
                else if (gameSquares[i].classList[1] === "2"){
                    console.log("row 2 detected");
                    targetSpot = 4;
                    console.log("we are at",i+1, " and we want to go to ", targetSpot + 1);
                    var newPosition = -1;
                    for (let j = i; j>targetSpot;j--){
                        //check if spaceFilledLeft
                        if (spaceFilled(gameSquares[j-1]) === true){
                            console.log("SPACE DETECTED")
                            var newPosition = j;
                            console.log("j value: ", j);
                            break
                        }
                    }
                    if (newPosition == i){
                        ;
                    }
                    else{
                        if (newPosition < 0){
                            newPosition = targetSpot;
                        }
                    //swap with new position
                    oldValue = gameSquares[i].innerHTML;
                    oldColor = gameSquares[i].style.backgroundColor;
                    oldFont = gameSquares[i].style.color;
                    gameSquares[newPosition].innerHTML = oldValue;
                    gameSquares[newPosition].style.backgroundColor = oldColor;
                    gameSquares[newPosition].style.color = oldFont; 
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                    pieceSwapped = true;
                    }
                }
                else if (gameSquares[i].classList[1] === "3"){
                    console.log("row 3 detected");
                    targetSpot = 8;
                    console.log("we are at",i+1, " and we want to go to ", targetSpot + 1);
                    var newPosition = -1;
                    for (let j = i; j>targetSpot;j--){
                        //check if spaceFilledLeft
                        if (spaceFilled(gameSquares[j-1]) === true){
                            var newPosition = j;
                            break
                        }
                    }
                    if (newPosition == i){
                        ;
                    }
                    else{
                        if (newPosition < 0){
                            newPosition = targetSpot;
                        }
                    //swap with new position
                    oldValue = gameSquares[i].innerHTML;
                    oldColor = gameSquares[i].style.backgroundColor;
                    oldFont = gameSquares[i].style.color;
                    gameSquares[newPosition].innerHTML = oldValue;
                    gameSquares[newPosition].style.backgroundColor = oldColor;
                    gameSquares[newPosition].style.color = oldFont; 
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                    pieceSwapped = true;
                    }
                }
                else if (gameSquares[i].classList[1] === "4"){
                    console.log("row 4 detected");
                    targetSpot = 12;
                    console.log("we are at",i+1, " and we want to go to ", targetSpot + 1);
                    var newPosition = -1;
                    for (let j = i; j>targetSpot;j--){
                        //check if spaceFilledLeft
                        if (spaceFilled(gameSquares[j-1]) === true){
                            var newPosition = j;
                            break
                        }
                    }
                    if (newPosition == i){
                        ;
                    }
                    else{
                        if (newPosition < 0){
                            newPosition = targetSpot;
                        }
                    //swap with new position
                    oldValue = gameSquares[i].innerHTML;
                    oldColor = gameSquares[i].style.backgroundColor;
                    oldFont = gameSquares[i].style.color;
                    gameSquares[newPosition].innerHTML = oldValue;
                    gameSquares[newPosition].style.backgroundColor = oldColor;
                    gameSquares[newPosition].style.color = oldFont;                    
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                    pieceSwapped = true;
                    }
                }
            }
    }
}
console.log("loop done");
var mergeSuccessful = mergeMatchesLeft(gameSquares);
if (checkGap){
    mergeSuccessful = false;
    pieceSwapped = false;
}
if ((mergeSuccessful)||(pieceSwapped)){
    spawnPiece(gameSquares);
}
}

function spaceFilled(gameSquare){
    return gameSquare.classList.contains("taken");
}

function mergeMatchesLeft(gameSquares){
    var newValue;
    var newColor;
    var newFont;
    var mergeSuccessful = false;
    for (let i = 0; i < gameSquares.length; i++){
        //look for taken squares
        if (gameSquares[i].classList.contains("taken")){
            if ((gameSquares[i].classList[0] === "1")||(gameSquares[i].classList[0] === "5")||(gameSquares[i].classList[0] === "9")||(gameSquares[i].classList[0] === "13")){
                console.log("corner detected"); 
                //check space to the right
            }
            else{
                if (spaceFilled(gameSquares[i-1])){
                    var oldValue = gameSquares[i].innerHTML;
                    if (gameSquares[i-1].innerHTML === gameSquares[i].innerHTML){
                        if (oldValue === "2"){
                            newValue = "4";
                            newColor = "#EEE1C9";
                            newFont = "#776E65";
                            score += 4;
                        }
                        else if (oldValue === "4"){
                            newValue = "8";
                            newColor = "#F3B27A";
                            newFont = "#F9F6F2";
                            score += 8;
                        }
                        else if (oldValue === "8"){
                            newValue = "16";
                            newColor = "#F69664";
                            newFont = "#F9F6F2";
                            score += 16;
                        }
                        else if (oldValue === "16"){
                            newValue = "32";
                            newColor= "#F57C5F";
                            newFont = "#F9F6F2";
                            score += 32;
                        }
                        else if (oldValue === "32"){
                            newValue = "64";
                            newColor = "#F5623C";
                            newFont = "#F9F6F2";
                            score += 64;
                        }
                        else if (oldValue === "64"){
                            newValue = "128";
                            newColor = "#EDCE71";
                            newFont = "#F9F6F2";
                            score += 128;
                        }
                        else if (oldValue === "128"){
                            newValue = "256";
                            newColor = "#EDCC63";
                            newFont = "#F9F6F2";
                            score += 256;
                        }
                        else if (oldValue === "256"){
                            newValue = "512";
                            newColor = "#F9CA58";
                            newFont = "#F9F6F2";
                            score += 512;
                        }
                        else if (oldValue === "512"){
                            newValue = "1024";
                            newColor = "#EDC53F";
                            newFont = "#F9F6F2";
                            score += 1024;
                        }
                        else if (oldValue === "1024"){
                            newValue = "2048";
                            newColor = "#E0BA00";
                            newFont = "#F9F6F2";
                            score += 2048;
                        }
                        gameSquares[i-1].innerHTML = newValue;
                        gameSquares[i-1].style.backgroundColor = newColor;
                        gameSquares[i-1].style.color = newFont;
                        gameSquares[i].innerHTML = "";
                        gameSquares[i].style.backgroundColor = "#CDC1B4";
                        gameSquares[i].classList.toggle("taken");
                        scoreElement = document.querySelector("#score-text");
                        if (score > 999){
                            scoreElement.style.fontSize = "1.5rem";
                            scoreElement.style.bottom = "25px";
                        }
                        scoreElement.innerHTML = score;
                        mergeSuccessful = true;
                    }
                }
            }

        }
    }
    console.log(gameSquares);
    if (mergeSuccessful){
        checkForGapsLeft(gameSquares);
    }
    return mergeSuccessful;
}

function checkForGapsRight(gameSquares){
    for (let i = 15; i > -1; i--){
        if ((i === 3)|| (i === 7) || (i === 11) || (i === 15)){
            ;
        }
        else if ((i === 2)||(i === 6)||(i === 8)||(i === 14)){
            ;
        }
        else{
            if (gameSquares[i+2].classList.contains("taken") && (gameSquares[i+1].classList.contains("taken")=== false)){
                moveRight(gameSquares, true);
            }
        }
    }
  
}

function checkForGapsLeft(gameSquares){
    for (let i = 0; i < gameSquares.length; i++){
        if ((i === 0)|| (i === 4) || (i === 8) || (i === 12)){
            ;
        }
        else if ((i === 1)||(i === 5)||(i === 9)||(i === 13)){
            ;
        }
        else{
            if (gameSquares[i-2].classList.contains("taken") && (gameSquares[i-1].classList.contains("taken")=== false)){
                moveLeft(gameSquares, true);
            }
        }
    }
}

function checkForGapsUp(gameSquares){
    for (let i = 0; i < gameSquares.length; i++){
        if ((i === 0)|| (i === 1) || (i === 2) || (i === 3)){
            ;
        }
        else if ((i === 4)||(i === 5)||(i === 6)||(i === 7)){
            ;
        }
        else{
            if (gameSquares[i-8].classList.contains("taken") && (gameSquares[i-4].classList.contains("taken")=== false)){
                moveUp(gameSquares, true);
            }
        }
    }
}

function checkForGapsDown(gameSquares){
    for (let i = 15; i > -1; i--){
        if ((i === 12)|| (i === 13) || (i === 14) || (i === 15)){
            ;
        }
        else if ((i === 8)||(i === 9)||(i === 10)||(i === 11)){
            ;
        }
        else{
            if (gameSquares[i+8].classList.contains("taken") && (gameSquares[i+4].classList.contains("taken")=== false)){
                moveDown(gameSquares, true);
            }
        }
    }
}

function mergeMatchesRight(gameSquares){
    console.log("CHECKING");
    console.log(gameSquares);
    var newValue;
    var newColor;
    var newFont;
    var mergeSuccessful = false;
    for (let i = 15; i>-1; i--){
        //look for taken squares
        if (gameSquares[i].classList.contains("taken")){
            if ((gameSquares[i].classList[0] === "4")||(gameSquares[i].classList[0] === "8")||(gameSquares[i].classList[0] === "12")||(gameSquares[i].classList[0] === "16")){
                console.log("corner detected"); 
            }
            else{
                if (spaceFilled(gameSquares[i+1])){
                    var oldValue = gameSquares[i].innerHTML;
                    if (gameSquares[i+1].innerHTML === gameSquares[i].innerHTML){
                        if (oldValue === "2"){
                            newValue = "4";
                            newColor = "#EEE1C9";
                            newFont = "#776E65";
                            score += 4;
                        }
                        else if (oldValue === "4"){
                            newValue = "8";
                            newColor = "#F3B27A";
                            newFont = "#F9F6F2";
                            score += 8;
                        }
                        else if (oldValue === "8"){
                            newValue = "16";
                            newColor = "#F69664";
                            newFont = "#F9F6F2";
                            score += 16;
                        }
                        else if (oldValue === "16"){
                            newValue = "32";
                            newColor= "#F57C5F";
                            newFont = "#F9F6F2";
                            score += 32;
                        }
                        else if (oldValue === "32"){
                            newValue = "64";
                            newColor = "#F5623C";
                            newFont = "#F9F6F2";
                            score += 64;
                        }
                        else if (oldValue === "64"){
                            newValue = "128";
                            newColor = "#EDCE71";
                            newFont = "#F9F6F2";
                            score += 128;
                        }
                        else if (oldValue === "128"){
                            newValue = "256";
                            newColor = "#EDCC63";
                            newFont = "#F9F6F2";
                            score += 256;
                        }
                        else if (oldValue === "256"){
                            newValue = "512";
                            newColor = "#F9CA58";
                            newFont = "#F9F6F2";
                            score += 512;
                        }
                        else if (oldValue === "512"){
                            newValue = "1024";
                            newColor = "#EDC53F";
                            newFont = "#F9F6F2";
                            score += 1024;
                        }
                        else if (oldValue === "1024"){
                            newValue = "2048";
                            newColor = "#E0BA00";
                            newFont = "#F9F6F2";
                            score += 2048;
                        }
                        gameSquares[i+1].innerHTML = newValue;
                        gameSquares[i+1].style.backgroundColor = newColor;
                        gameSquares[i+1].style.color = newFont;
                        gameSquares[i].innerHTML = "";
                        gameSquares[i].style.backgroundColor = "#CDC1B4";
                        gameSquares[i].classList.toggle("taken");
                        scoreElement = document.querySelector("#score-text");
                        if (score > 999){
                            scoreElement.style.fontSize = "1.5rem";
                            scoreElement.style.bottom = "25px";
                        }
                        scoreElement.innerHTML = score;
                        mergeSuccessful = true;

                    }
                }
            }

        }
    }
    console.log(gameSquares);
    if (mergeSuccessful){
        checkForGapsRight(gameSquares);
    }
    return mergeSuccessful;
}

function moveRight(gameSquares, checkGap){
    console.log("RIGHT");
    console.log(gameSquares);
    var pieceSwapped = false;
    for (let i = 15; i > -1; i--){
        if (gameSquares[i].classList.contains("taken")){
            console.log("Scanning ", gameSquares[i].classList[0])
            console.log("gameSquares length: ", gameSquares.length)
            //check if it's rightmost
            if ((gameSquares[i].classList[0] === "4")||(gameSquares[i].classList[0] === "8")||(gameSquares[i].classList[0] === "12")||(gameSquares[i].classList[0] === "16")){
                console.log("corner detected"); 
            }
            else{
                var targetSpot = 0;
                //find row
                console.log("not a corner");
                console.log(gameSquares[i].classList);
                if ((gameSquares[i].classList[1] === "1")||(gameSquares[i].classList[1] === "A")){
                    console.log("row 1 detected");
                    targetSpot = 3;
                    console.log("we are at",i+1, " and we want to go to ", targetSpot + 1);
                    var newPosition = -1;
                    for (let j = i; j<targetSpot;j++){
                        //check if spaceFilledLeft
                        if (spaceFilled(gameSquares[j+1]) === true){
                            var newPosition = j;
                            break
                        }
                    }
                    if (newPosition == i){
                        ;
                    }
                    else{
                        if (newPosition < 0){
                            newPosition = targetSpot;
                        }
                    //swap with new position
                    oldValue = gameSquares[i].innerHTML;
                    oldColor = gameSquares[i].style.backgroundColor;
                    oldFont = gameSquares[i].style.color;
                    gameSquares[newPosition].innerHTML = oldValue;
                    gameSquares[newPosition].style.backgroundColor = oldColor;
                    gameSquares[newPosition].style.color = oldFont;   
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                    pieceSwapped = true;
                    }
                }
                else if (gameSquares[i].classList[1] === "2"){
                    console.log("row 2 detected");
                    targetSpot = 7;
                    console.log("we are at",i+1, " and we want to go to ", targetSpot + 1);
                    var newPosition = -1;
                    for (let j = i; j<targetSpot;j++){
                        //check if spaceFilledLeft
                        if (spaceFilled(gameSquares[j+1]) === true){
                            var newPosition = j;
                            break
                        }
                    }
                    if (newPosition == i){
                        ;
                    }
                    else{
                        if (newPosition < 0){
                            newPosition = targetSpot;
                        }
                    //swap with new position
                    oldValue = gameSquares[i].innerHTML;
                    oldColor = gameSquares[i].style.backgroundColor;
                    oldFont = gameSquares[i].style.color;
                    gameSquares[newPosition].innerHTML = oldValue;
                    gameSquares[newPosition].style.backgroundColor = oldColor;
                    gameSquares[newPosition].style.color = oldFont;   
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                    pieceSwapped = true;
                    }
                }
                else if (gameSquares[i].classList[1] === "3"){
                    console.log("row 3 detected");
                    targetSpot = 11;
                    console.log("we are at",i+1, " and we want to go to ", targetSpot + 1);
                    var newPosition = -1;
                    for (let j = i; j<targetSpot;j++){
                        //check if spaceFilledLeft
                        if (spaceFilled(gameSquares[j+1]) === true){
                            var newPosition = j;
                            break
                        }
                    }
                    if (newPosition == i){
                        ;
                    }
                    else{
                        if (newPosition < 0){
                            newPosition = targetSpot;
                        }
                    //swap with new position
                    oldValue = gameSquares[i].innerHTML;
                    oldColor = gameSquares[i].style.backgroundColor;
                    oldFont = gameSquares[i].style.color;
                    gameSquares[newPosition].innerHTML = oldValue;
                    gameSquares[newPosition].style.backgroundColor = oldColor;
                    gameSquares[newPosition].style.color = oldFont;   
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                    pieceSwapped = true;
                    }
                }
                else if (gameSquares[i].classList[1] === "4"){
                    console.log("row 4 detected");
                    targetSpot = 15;
                    console.log("we are at",i+1, " and we want to go to ", targetSpot + 1);
                    var newPosition = -1;
                    for (let j = i; j<targetSpot;j++){
                        //check if spaceFilledLeft
                        if (spaceFilled(gameSquares[j+1]) === true){
                            var newPosition = j;
                            break
                        }
                    }
                    if (newPosition == i){
                        ;
                    }
                    else{
                        if (newPosition < 0){
                            newPosition = targetSpot;
                        }
                    //swap with new position
                    oldValue = gameSquares[i].innerHTML;
                    oldColor = gameSquares[i].style.backgroundColor;
                    oldFont = gameSquares[i].style.color;
                    gameSquares[newPosition].innerHTML = oldValue;
                    gameSquares[newPosition].style.backgroundColor = oldColor;
                    gameSquares[newPosition].style.color = oldFont;   
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                    pieceSwapped = true;
                    }
                }
            }
    }
}
console.log("loop done");
var mergeSuccessful = mergeMatchesRight(gameSquares);
if (checkGap){
    pieceSwapped = false;
    mergeSuccessful = false;
}
if ((pieceSwapped)||(mergeSuccessful)){
    spawnPiece(gameSquares);
}
}
function moveUp(gameSquares, checkGap){
    var pieceSwapped = false;
    for (let i = 0; i < gameSquares.length; i++){
        if (gameSquares[i].classList.contains("taken")){
            console.log("Scanning ", gameSquares[i].classList[0])
            console.log("gameSquares length: ", gameSquares.length)
            console.log(gameSquares[i].classList);
            //check if it's leftmost
            if ((gameSquares[i].classList[0] === "1")||(gameSquares[i].classList[0] === "2")||(gameSquares[i].classList[0] === "3")||(gameSquares[i].classList[0] === "4")){
                console.log("ceiling detected"); 
            }
            else{
                var targetSpot = 0;
                //find column
                console.log("not a ceiling");
                if (gameSquares[i].classList[2] === "A"){
                    console.log("column A detected");
                    targetSpot = 0;
                    console.log("we are at",i+1, " and we want to go to ", targetSpot + 1);
                    var newPosition = -1;
                    let j = i;
                   while(j>targetSpot){
                        //check if spaceFilledLeft
                        if (spaceFilled(gameSquares[j-4]) === true){
                            newPosition = j;
                            break
                        }
                        j -=4;
                    }
                    if (newPosition == i){
                        ;
                    }
                    else{
                        if (newPosition < 0){
                            newPosition = targetSpot;
                        }
                    //swap with new position
                    oldValue = gameSquares[i].innerHTML;
                    oldColor = gameSquares[i].style.backgroundColor;
                    oldFont = gameSquares[i].style.color;
                    gameSquares[newPosition].innerHTML = oldValue;
                    gameSquares[newPosition].style.backgroundColor = oldColor;
                    gameSquares[newPosition].style.color = oldFont;   
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                    pieceSwapped = true;
                    }
                }
                else if (gameSquares[i].classList[2] === "B"){
                    console.log("column B detected");
                    targetSpot = 1;
                    console.log("we are at",i+1, " and we want to go to ", targetSpot + 1);
                    var newPosition = -1;
                    let j = i;
                   while(j>targetSpot){
                        //check if spaceFilledLeft
                        if (spaceFilled(gameSquares[j-4]) === true){
                            newPosition = j;
                            break
                        }
                        j -=4;
                    }
                    if (newPosition == i){
                        ;
                    }
                    else{
                        if (newPosition < 0){
                            newPosition = targetSpot;
                        }
                    //swap with new position
                    oldValue = gameSquares[i].innerHTML;
                    oldColor = gameSquares[i].style.backgroundColor;
                    oldFont = gameSquares[i].style.color;
                    gameSquares[newPosition].innerHTML = oldValue;
                    gameSquares[newPosition].style.backgroundColor = oldColor;
                    gameSquares[newPosition].style.color = oldFont;   
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                    pieceSwapped = true;
                    }
                }
                else if (gameSquares[i].classList[2] === "C"){
                    console.log("column C detected");
                    targetSpot = 2;
                    console.log("we are at",i+1, " and we want to go to ", targetSpot + 1);
                    var newPosition = -1;
                    let j = i;
                   while(j>targetSpot){
                        //check if spaceFilledLeft
                        if (spaceFilled(gameSquares[j-4]) === true){
                            newPosition = j;
                            break
                        }
                        j -=4;
                    }
                    if (newPosition == i){
                        ;
                    }
                    else{
                        if (newPosition < 0){
                            newPosition = targetSpot;
                        }
                    //swap with new position
                    oldValue = gameSquares[i].innerHTML;
                    oldColor = gameSquares[i].style.backgroundColor;
                    oldFont = gameSquares[i].style.color;
                    gameSquares[newPosition].innerHTML = oldValue;
                    gameSquares[newPosition].style.backgroundColor = oldColor;
                    gameSquares[newPosition].style.color = oldFont;   
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                    pieceSwapped = true;
                    }
                }
                else if (gameSquares[i].classList[2] === "D"){
                    console.log("column D detected");
                    targetSpot = 3;
                    console.log("we are at",i+1, " and we want to go to ", targetSpot + 1);
                    var newPosition = -1;
                    let j = i;
                   while(j>targetSpot){
                        //check if spaceFilledLeft
                        if (spaceFilled(gameSquares[j-4]) === true){
                            newPosition = j;
                            break
                        }
                        j -=4;
                    }
                    if (newPosition == i){
                        ;
                    }
                    else{
                        if (newPosition < 0){
                            newPosition = targetSpot;
                        }
                    //swap with new position
                    oldValue = gameSquares[i].innerHTML;
                    oldColor = gameSquares[i].style.backgroundColor;
                    oldFont = gameSquares[i].style.color;
                    gameSquares[newPosition].innerHTML = oldValue;
                    gameSquares[newPosition].style.backgroundColor = oldColor;
                    gameSquares[newPosition].style.color = oldFont;   
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                    pieceSwapped = true;
                    }
                }
            }
    }
}
console.log("loop done");
var mergeSuccessful = mergeMatchesUp(gameSquares);
if (checkGap){
    pieceSwapped = false;
    mergeSuccessful = false;
}
if ((pieceSwapped)||(mergeSuccessful)){
    ssspawnPiece(gameSquares);
}
}

function mergeMatchesUp(gameSquares){
    var newValue;
    var newColor;
    var newFont;
    var mergeSuccessful = false;
    for (let i = 0; i < gameSquares.length; i++){
        //look for taken squares
        if (gameSquares[i].classList.contains("taken")){
            if ((gameSquares[i].classList[0] === "1")||(gameSquares[i].classList[0] === "2")||(gameSquares[i].classList[0] === "3")||(gameSquares[i].classList[0] === "4")){
                console.log("ceiling detected"); 
            }
            else{
                if (spaceFilled(gameSquares[i-4])){
                    var oldValue = gameSquares[i].innerHTML;
                    if (gameSquares[i-4].innerHTML === gameSquares[i].innerHTML){
                        if (oldValue === "2"){
                            newValue = "4";
                            newColor = "#EEE1C9";
                            newFont = "#776E65";
                            score += 4;
                        }
                        else if (oldValue === "4"){
                            newValue = "8";
                            newColor = "#F3B27A";
                            newFont = "#F9F6F2";
                            score += 8;
                        }
                        else if (oldValue === "8"){
                            newValue = "16";
                            newColor = "#F69664";
                            newFont = "#F9F6F2";
                            score += 16;
                        }
                        else if (oldValue === "16"){
                            newValue = "32";
                            newColor= "#F57C5F";
                            newFont = "#F9F6F2";
                            score += 32;
                        }
                        else if (oldValue === "32"){
                            newValue = "64";
                            newColor = "#F5623C";
                            newFont = "#F9F6F2";
                            score += 64;
                        }
                        else if (oldValue === "64"){
                            newValue = "128";
                            newColor = "#EDCE71";
                            newFont = "#F9F6F2";
                            score += 128;
                        }
                        else if (oldValue === "128"){
                            newValue = "256";
                            newColor = "#EDCC63";
                            newFont = "#F9F6F2";
                            score += 256;
                        }
                        else if (oldValue === "256"){
                            newValue = "512";
                            newColor = "#F9CA58";
                            newFont = "#F9F6F2";
                            score += 512;
                        }
                        else if (oldValue === "512"){
                            newValue = "1024";
                            newColor = "#EDC53F";
                            newFont = "#F9F6F2";
                            score += 1024;
                        }
                        else if (oldValue === "1024"){
                            newValue = "2048";
                            newColor = "#E0BA00";
                            newFont = "#F9F6F2";
                            score += 2048;
                        }
                        gameSquares[i-4].innerHTML = newValue;
                        gameSquares[i-4].style.backgroundColor = newColor;
                        gameSquares[i-4].style.color = newFont;
                        gameSquares[i].innerHTML = "";
                        gameSquares[i].style.backgroundColor = "#CDC1B4";
                        gameSquares[i].classList.toggle("taken");
                        scoreElement = document.querySelector("#score-text");
                        if (score > 999){
                            scoreElement.style.fontSize = "1.5rem";
                            scoreElement.style.bottom = "25px";
                        }
                        scoreElement.innerHTML = score;
                        mergeSuccessful = true;
                    }
                }
            }

        }
    }
    console.log(gameSquares);
    if (mergeSuccessful){
        checkForGapsUp(gameSquares);
    }
    return mergeSuccessful;
}

function moveDown(gameSquares, checkGap){
    var pieceSwapped = false;
    for (let i = 15; i > -1; i--){
        if (gameSquares[i].classList.contains("taken")){
            console.log("Scanning ", gameSquares[i].classList[0])
            console.log("gameSquares length: ", gameSquares.length)
            console.log(gameSquares[i].classList);
            //check if it's bottom
            if ((gameSquares[i].classList[0] === "13")||(gameSquares[i].classList[0] === "14")||(gameSquares[i].classList[0] === "15")||(gameSquares[i].classList[0] === "16")){
                console.log("floor detected"); 
            }
            else{
                var targetSpot = 0;
                //find column
                console.log("not a floor");
                if ((gameSquares[i].classList[2] === "A")||(gameSquares[i].classList[1] === "A")){
                    console.log("column A detected");
                    targetSpot = 12;
                    console.log("we are at",i+1, " and we want to go to ", targetSpot + 1);
                    var newPosition = -1;
                    let j = i;
                   while(j<targetSpot){
                        //check if spaceFilledLeft
                        if (spaceFilled(gameSquares[j+4]) === true){
                            newPosition = j;
                            break
                        }
                        j +=4;
                    }
                    if (newPosition == i){
                        ;
                    }
                    else{
                        if (newPosition < 0){
                            newPosition = targetSpot;
                        }
                    //swap with new position
                    oldValue = gameSquares[i].innerHTML;
                    oldColor = gameSquares[i].style.backgroundColor;
                    oldFont = gameSquares[i].style.color;
                    gameSquares[newPosition].innerHTML = oldValue;
                    gameSquares[newPosition].style.backgroundColor = oldColor;
                    gameSquares[newPosition].style.color = oldFont;   
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                    pieceSwapped = true;
                    }
                }
                else if (gameSquares[i].classList[2] === "B"){
                    console.log("column B detected");
                    targetSpot = 13;
                    console.log("we are at",i+1, " and we want to go to ", targetSpot + 1);
                    var newPosition = -1;
                    let j = i;
                   while(j<targetSpot){
                        //check if spaceFilledLeft
                        if (spaceFilled(gameSquares[j+4]) === true){
                            newPosition = j;
                            break
                        }
                        j +=4;
                    }
                    if (newPosition == i){
                        ;
                    }
                    else{
                        if (newPosition < 0){
                            newPosition = targetSpot;
                        }
                    //swap with new position
                    oldValue = gameSquares[i].innerHTML;
                    oldColor = gameSquares[i].style.backgroundColor;
                    oldFont = gameSquares[i].style.color;
                    gameSquares[newPosition].innerHTML = oldValue;
                    gameSquares[newPosition].style.backgroundColor = oldColor;
                    gameSquares[newPosition].style.color = oldFont;   
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                    pieceSwapped = true;
                    }
                }
                else if (gameSquares[i].classList[2] === "C"){
                    console.log("column C detected");
                    targetSpot = 14;
                    console.log("we are at",i+1, " and we want to go to ", targetSpot + 1);
                    var newPosition = -1;
                    let j = i;
                   while(j<targetSpot){
                        //check if spaceFilledLeft
                        if (spaceFilled(gameSquares[j+4]) === true){
                            newPosition = j;
                            break
                        }
                        j +=4;
                    }
                    if (newPosition == i){
                        ;
                    }
                    else{
                        if (newPosition < 0){
                            newPosition = targetSpot;
                        }
                    //swap with new position
                    oldValue = gameSquares[i].innerHTML;
                    oldColor = gameSquares[i].style.backgroundColor;
                    oldFont = gameSquares[i].style.color;
                    gameSquares[newPosition].innerHTML = oldValue;
                    gameSquares[newPosition].style.backgroundColor = oldColor;
                    gameSquares[newPosition].style.color = oldFont;   
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                    pieceSwapped = true;
                    }
                }
                else if (gameSquares[i].classList[2] === "D"){
                    console.log("column D detected");
                    targetSpot = 15;
                    console.log("we are at",i+1, " and we want to go to ", targetSpot + 1);
                    var newPosition = -1;
                    let j = i;
                   while(j<targetSpot){
                        //check if spaceFilledLeft
                        if (spaceFilled(gameSquares[j+4]) === true){
                            newPosition = j;
                            break
                        }
                        j +=4;
                    }
                    if (newPosition == i){
                        ;
                    }
                    else{
                        if (newPosition < 0){
                            newPosition = targetSpot;
                        }
                    //swap with new position
                    oldValue = gameSquares[i].innerHTML;
                    oldColor = gameSquares[i].style.backgroundColor;
                    oldFont = gameSquares[i].style.color;
                    gameSquares[newPosition].innerHTML = oldValue;
                    gameSquares[newPosition].style.backgroundColor = oldColor;
                    gameSquares[newPosition].style.color = oldFont;   
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                    pieceSwapped = true;
                    console.log(pieceSwapped);
                    }
                }
            }
    }
}
console.log("loop done");
console.log(pieceSwapped);
var mergeSuccessful = mergeMatchesDown(gameSquares);
if (checkGap){
    mergeSuccessful = false;
    pieceSwapped = false;
}
if ((pieceSwapped)||(mergeSuccessful)){
spawnPiece(gameSquares);
}
}

function mergeMatchesDown(gameSquares){
    var newValue;
    var newColor;
    var newFont;
    var mergeSuccessful = false;
    for (let i = 15; i > -1; i--){
        //look for taken squares
        if (gameSquares[i].classList.contains("taken")){
            if ((gameSquares[i].classList[0] === "13")||(gameSquares[i].classList[0] === "14")||(gameSquares[i].classList[0] === "15")||(gameSquares[i].classList[0] === "16")){
                console.log("floor detected"); 
            }
            else{
                if (spaceFilled(gameSquares[i+4])){
                    var oldValue = gameSquares[i].innerHTML;
                    if (gameSquares[i+4].innerHTML === gameSquares[i].innerHTML){
                        if (oldValue === "2"){
                            newValue = "4";
                            newColor = "#EEE1C9";
                            newFont = "#776E65";
                            score += 4;
                        }
                        else if (oldValue === "4"){
                            newValue = "8";
                            newColor = "#F3B27A";
                            newFont = "#F9F6F2";
                            score += 8;
                        }
                        else if (oldValue === "8"){
                            newValue = "16";
                            newColor = "#F69664";
                            newFont = "#F9F6F2";
                            score += 16;
                        }
                        else if (oldValue === "16"){
                            newValue = "32";
                            newColor= "#F57C5F";
                            newFont = "#F9F6F2";
                            score += 32;
                        }
                        else if (oldValue === "32"){
                            newValue = "64";
                            newColor = "#F5623C";
                            newFont = "#F9F6F2";
                            score += 64;
                        }
                        else if (oldValue === "64"){
                            newValue = "128";
                            newColor = "#EDCE71";
                            newFont = "#F9F6F2";
                            score += 128;
                        }
                        else if (oldValue === "128"){
                            newValue = "256";
                            newColor = "#EDCC63";
                            newFont = "#F9F6F2";
                            score += 256;
                        }
                        else if (oldValue === "256"){
                            newValue = "512";
                            newColor = "#F9CA58";
                            newFont = "#F9F6F2";
                            score += 512;
                        }
                        else if (oldValue === "512"){
                            newValue = "1024";
                            newColor = "#EDC53F";
                            newFont = "#F9F6F2";
                            score += 1024;
                        }
                        else if (oldValue === "1024"){
                            newValue = "2048";
                            newColor = "#E0BA00";
                            newFont = "#F9F6F2";
                            score += 2048;
                        }
                        gameSquares[i+4].innerHTML = newValue;
                        gameSquares[i+4].style.backgroundColor = newColor;
                        gameSquares[i+4].style.color = newFont;
                        gameSquares[i].innerHTML = "";
                        gameSquares[i].style.backgroundColor = "#CDC1B4";
                        gameSquares[i].classList.toggle("taken");
                        scoreElement = document.querySelector("#score-text");
                        if (score > 999){
                            scoreElement.style.fontSize = "1.5rem";
                            scoreElement.style.bottom = "25px";
                        }
                        scoreElement.innerHTML = score;
                        mergeSuccessful = true;
                    }
                }
            }

        }
    }
    if (mergeSuccessful){
        checkForGapsDown(gameSquares);
    }
    console.log(gameSquares);
    return mergeSuccessful;
}

function spawnPiece(gameSquares){
    var pieceFound = false;
    while (pieceFound === false){
        var potentialPiece = Math.floor(Math.random()*16);
        if (gameSquares[potentialPiece].classList.contains("taken") === false){
            gameSquares[potentialPiece].classList.toggle("taken");
            if (isFour()){
                gameSquares[potentialPiece].innerHTML = "4";
                gameSquares[potentialPiece].style.backgroundColor = "#EEE1C9";
                gameSquares[potentialPiece].style.color = "#776E65";
            }
            else{
            gameSquares[potentialPiece].innerHTML = "2";
            gameSquares[potentialPiece].style.backgroundColor = "#EEE4DA";
            gameSquares[potentialPiece].style.color = "#776E65";
            }
            pieceFound = true;
        }
    }
}

function allSquaresFilled(gameSquares){
    var returnValue = true;
    for (let i = 0; i<gameSquares.length;i++){
        if (gameSquares[i].classList.contains("taken") === false){
            returnValue = false;
            break;
        }
    }
    return returnValue;
}