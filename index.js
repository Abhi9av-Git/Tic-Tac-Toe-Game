const boxes=document.querySelectorAll('.js-box');
const msgContainer = document.querySelector('.msg-container');

let turn0=true;

const winCombinations=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5], 
  [6, 7, 8],
];

const resetGame= ()=> {
  turn0=true;

  enableBoxes();

  msgContainer.classList.add("hide");
};

document.querySelectorAll('.js-box').forEach(box=> {
  box.addEventListener('click', ()=> {
    if (turn0) {

      box.innerText='0';

      turn0=false;

    }
    else {

      box.innerText='X';

      turn0=true;
    }

    box.disabled=true;
    checkWinner();
  });
});

const disableBoxes=()=> {
  for (let box of boxes) {
    box.disabled=true;
  }
};

const enableBoxes=()=> {
  for (let box of boxes) {
    box.disabled=false;
    box.innerText="";
  }
};

const showWinner= (winner)=> {
  document.querySelector('#msg').innerText=`Congratulations Winner is, ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner= ()=> {

  for (let combinations of winCombinations) {
    let pos1val=boxes[combinations[0]].innerText;
    let pos2val=boxes[combinations[1]].innerText;
    let pos3val=boxes[combinations[2]].innerText;

    if (pos1val!="" && pos2val!="" && pos3val!="") {
      if (pos1val===pos2val && pos2val===pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

document.querySelector('.js-new-game').addEventListener('click', resetGame);
document.querySelector('.js-reset-button').addEventListener('click', resetGame);
