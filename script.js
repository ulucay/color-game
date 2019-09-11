let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];

let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");

let pickColor = () => {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
 }

 let changeColors = (color) => {
    //loop through all squares
    for(let i = 0; i < squares.length ; i++){
    //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

colorDisplay.textContent = pickColor();

for(let i = 0 ; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;

        if(clickedColor === pickColor()){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}



