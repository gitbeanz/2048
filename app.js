


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
    console.log(firstNum);
    var secondNum = getSecondNumber(firstNum);
    console.log(secondNum);
   
    gameSquares[firstNum].innerHTML = "2";
    gameSquares[firstNum].style.backgroundColor = "#EEE4DA"
    gameSquares[firstNum].style.color = "#776E65"
    gameSquares[firstNum].classList.toggle("taken");
    gameSquares[secondNum].innerHTML = "2";
    gameSquares[secondNum].style.backgroundColor = "#EEE4DA";
    gameSquares[secondNum].style.color = "#776E65";
    gameSquares[secondNum].classList.toggle("taken");

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

function moveLeft(gameSquares){
    //spawnPiece(gameSquares);
    for (let i = 0; i < gameSquares.length; i++){
        if (gameSquares[i].classList.contains("taken")){
            //check if space to the left of it
            if (gameSquares[i].classList[1] === '1'){
                var leftValue = 0;
                for (let j = gameSquares[i].classList[0]-1; j>0;j--){
                    leftValue++;
                }
            }
            else if (gameSquares[i].classList[1] === '2'){
                var leftValue = 0;
                for (let j = gameSquares[i].classList[0]-1; j>5;j--){
                    leftValue++;
                }
            }
            else if (gameSquares[i].classList[1] === '3'){
                var leftValue = 0;
                for (let j = gameSquares[i].classList[0]-1; j>9;j--){
                    leftValue++;
                }
            }
            else if (gameSquares[i].classList[1] === '4'){
                var leftValue = 0;
                for (let j = gameSquares[i].classList[0]-1; j>13;j--){
                    leftValue++;
                }
            }
            console.log(leftValue);

        }
    }
}
function moveRight(){
    console.log("RIGHT");
}
function moveUp(){
    console.log("UP");
}
function moveDown(){
    console.log("DOWN")
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