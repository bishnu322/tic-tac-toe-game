// let boxes = document.querySelectorAll(".box")
let boxes = document.getElementsByClassName("box");
let turn = "X";
let gameover = false

//  turn Setting 
const changeTurn = () => {
  document.getElementsByClassName("info").innerText = "turn for" + turn;
  return turn === "X" ? "O" : "X";
};


//  Game logic
const checkWin = () => {
  let winsCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winsCondition.forEach((e) => {
    if (
      boxes[e[0]].innerText === boxes[e[1]].innerText &&
      boxes[e[2]].innerText === boxes[e[1]].innerText &&
      boxes[e[0]].innerText !== " "
    ) {
      if (boxes[e[0]].innerText) {
        document.querySelector(".info").innerHTML =
          boxes[e[0]].innerHTML + " " + "won";
        document.querySelector(".imgInfo").style.width = "200px";
        gameover = true
      }
    }
  });
};

// box selection 
Array.from(boxes).forEach((element) => {
  element.addEventListener("click", (e) => {
    if (element.innerHTML === "") {
      element.innerHTML = turn;
      turn = changeTurn();
      checkWin();
    }
  });
});


// Reset button 
let button = document.querySelector(".btn");

button.addEventListener("click", () => {
  Array.from(boxes).forEach((element) => {
    element.innerHTML = "";
    
  });
  turn  = "X"
  document.querySelector(".imgInfo").style.width = "0px";
  document.querySelector('.info').innerHTML = " ";
  gameover = false
});
