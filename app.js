var gameSquares = document.querySelectorAll("[id='game-square']");
document.addEventListener("keydown",function(event){
    event.preventDefault();
    const key = event.key;
    switch (key){
        case "ArrowLeft":
            moveLeft(gameSquares);
            break;
        case "ArrowRight":
            moveRight();
            break;
        case "ArrowUp":
            moveUp();
            break;
        case "ArrowDown":
            moveDown();
            break;
    }
})


function startNewGame(){
    var gameSquares = document.querySelectorAll("[id='game-square']");
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
   
    gameSquares[firstNum].innerHTML = "2";
    gameSquares[firstNum].style.backgroundColor = "#EEE4DA"
    gameSquares[firstNum].style.color = "#776E65"
    gameSquares[firstNum].classList.toggle("taken");
    gameSquares[secondNum].innerHTML = "2";
    gameSquares[secondNum].style.backgroundColor = "#EEE4DA";
    gameSquares[secondNum].style.color = "#776E65";
    gameSquares[secondNum].classList.toggle("taken"); 
}

function getFirstNumber(){
    return 0;
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

function moveLeft(gameSquares){
    spawnPiece(gameSquares);
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
                    if (newPosition < 0){
                        newPosition = targetSpot;
                    }
                    //swap with new position
                    gameSquares[newPosition].innerHTML = "2";
                    gameSquares[newPosition].style.backgroundColor = "#EEE4DA"
                    gameSquares[newPosition].style.color = "#776E65"
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                }
                else if (gameSquares[i].classList[1] === "2"){
                    console.log("row 2 detected");
                    targetSpot = 4;
                    console.log("we are at",i+1, " and we want to go to ", targetSpot + 1);
                    var newPosition = -1;
                    for (let j = i; j>targetSpot;j--){
                        //check if spaceFilledLeft
                        if (spaceFilled(gameSquares[j-1]) === true){
                            var newPosition = j;
                            break
                        }
                    }
                    if (newPosition < 0){
                        newPosition = targetSpot;
                    }
                    //swap with new position
                    gameSquares[newPosition].innerHTML = "2";
                    gameSquares[newPosition].style.backgroundColor = "#EEE4DA"
                    gameSquares[newPosition].style.color = "#776E65"
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
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
                    if (newPosition < 0){
                        newPosition = targetSpot;
                    }
                    //swap with new position
                    gameSquares[newPosition].innerHTML = "2";
                    gameSquares[newPosition].style.backgroundColor = "#EEE4DA"
                    gameSquares[newPosition].style.color = "#776E65"
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
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
                    if (newPosition < 0){
                        newPosition = targetSpot;
                    }
                    //swap with new position
                    gameSquares[newPosition].innerHTML = "2";
                    gameSquares[newPosition].style.backgroundColor = "#EEE4DA"
                    gameSquares[newPosition].style.color = "#776E65"
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                }
            }
    }
}
console.log("loop done");
}

function spaceFilled(gameSquare){
    return gameSquare.classList.contains("taken");
}

function moveRight(){
    console.log("RIGHT");
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
                    if (newPosition < 0){
                        newPosition = targetSpot;
                    }
                    //swap with new position
                    gameSquares[newPosition].innerHTML = "2";
                    gameSquares[newPosition].style.backgroundColor = "#EEE4DA"
                    gameSquares[newPosition].style.color = "#776E65"
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
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
                    if (newPosition < 0){
                        newPosition = targetSpot;
                    }
                    //swap with new position
                    gameSquares[newPosition].innerHTML = "2";
                    gameSquares[newPosition].style.backgroundColor = "#EEE4DA"
                    gameSquares[newPosition].style.color = "#776E65"
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
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
                    if (newPosition < 0){
                        newPosition = targetSpot;
                    }
                    //swap with new position
                    gameSquares[newPosition].innerHTML = "2";
                    gameSquares[newPosition].style.backgroundColor = "#EEE4DA"
                    gameSquares[newPosition].style.color = "#776E65"
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
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
                    if (newPosition < 0){
                        newPosition = targetSpot;
                    }
                    //swap with new position
                    gameSquares[newPosition].innerHTML = "2";
                    gameSquares[newPosition].style.backgroundColor = "#EEE4DA"
                    gameSquares[newPosition].style.color = "#776E65"
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                }
            }
    }
}
console.log("loop done");
}
function moveUp(){
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
                    if (newPosition < 0){
                        newPosition = targetSpot;
                    }
                    //swap with new position
                    gameSquares[newPosition].innerHTML = "2";
                    gameSquares[newPosition].style.backgroundColor = "#EEE4DA"
                    gameSquares[newPosition].style.color = "#776E65"
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
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
                    if (newPosition < 0){
                        newPosition = targetSpot;
                    }
                    //swap with new position
                    gameSquares[newPosition].innerHTML = "2";
                    gameSquares[newPosition].style.backgroundColor = "#EEE4DA"
                    gameSquares[newPosition].style.color = "#776E65"
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
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
                    if (newPosition < 0){
                        newPosition = targetSpot;
                    }
                    //swap with new position
                    gameSquares[newPosition].innerHTML = "2";
                    gameSquares[newPosition].style.backgroundColor = "#EEE4DA"
                    gameSquares[newPosition].style.color = "#776E65"
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
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
                    if (newPosition < 0){
                        newPosition = targetSpot;
                    }
                    //swap with new position
                    gameSquares[newPosition].innerHTML = "2";
                    gameSquares[newPosition].style.backgroundColor = "#EEE4DA"
                    gameSquares[newPosition].style.color = "#776E65"
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                }
            }
    }
}
console.log("loop done");
}
function moveDown(){
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
                    if (newPosition < 0){
                        newPosition = targetSpot;
                    }
                    //swap with new position
                    gameSquares[newPosition].innerHTML = "2";
                    gameSquares[newPosition].style.backgroundColor = "#EEE4DA"
                    gameSquares[newPosition].style.color = "#776E65"
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
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
                    if (newPosition < 0){
                        newPosition = targetSpot;
                    }
                    //swap with new position
                    gameSquares[newPosition].innerHTML = "2";
                    gameSquares[newPosition].style.backgroundColor = "#EEE4DA"
                    gameSquares[newPosition].style.color = "#776E65"
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
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
                    if (newPosition < 0){
                        newPosition = targetSpot;
                    }
                    //swap with new position
                    gameSquares[newPosition].innerHTML = "2";
                    gameSquares[newPosition].style.backgroundColor = "#EEE4DA"
                    gameSquares[newPosition].style.color = "#776E65"
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
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
                    if (newPosition < 0){
                        newPosition = targetSpot;
                    }
                    //swap with new position
                    gameSquares[newPosition].innerHTML = "2";
                    gameSquares[newPosition].style.backgroundColor = "#EEE4DA"
                    gameSquares[newPosition].style.color = "#776E65"
                    gameSquares[newPosition].classList.toggle("taken");
                    gameSquares[i].innerHTML = "";
                    gameSquares[i].style.backgroundColor = "#CDC1B4";
                    gameSquares[i].classList.toggle("taken");
                }
            }
    }
}
console.log("loop done");
}

function spawnPiece(gameSquares){
    var pieceFound = false;
    while (pieceFound === false){
        var potentialPiece = Math.floor(Math.random()*16);
        if (gameSquares[potentialPiece].classList.contains("taken") === false){
            gameSquares[potentialPiece].classList.toggle("taken");
            gameSquares[potentialPiece].innerHTML = "2";
            gameSquares[potentialPiece].style.backgroundColor = "#EEE4DA";
            gameSquares[potentialPiece].style.color = "#776E65";
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