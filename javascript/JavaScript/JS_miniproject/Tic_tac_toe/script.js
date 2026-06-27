const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset");
const message = document.querySelector("#message");

let turn = "X";

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach(function(box){

    box.addEventListener("click", function(){

        if(box.innerHTML == ""){

            box.innerHTML = turn;

            if(turn == "X"){
                turn = "O";
            }
            else{
                turn = "X";
            }

            checkWinner();   // Call the function here
            //restartGame();    // Call the function here

        }

    });

});

function checkWinner(){

    for (let pattern of winPatterns) {

        // Get the values of the three boxes in the current pattern
        let value1 = boxes[pattern[0]].innerHTML;
        let value2 = boxes[pattern[1]].innerHTML;
        let value3 = boxes[pattern[2]].innerHTML;

        // Check if all three boxes are filled and have the same value
        if (value1 != "" && value1 == value2 && value2 == value3) {

            // Display the winner
            message.innerHTML = "🎉 Game Over! " + value1 + " Wins!";
            message.classList.add("pop");
            return; // Exit the function once a winner is found
        }
    }

}

resetBtn.addEventListener("click", restartGame);

function restartGame() {

    boxes.forEach(function(box){

        box.innerHTML = "";

    });

    message.innerHTML = "";
    message.classList.remove("pop");

    turn = "X";

}