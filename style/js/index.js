function changeImage(roll) {
    if (roll == 1) {
        return "style/images/one.png";
    }
    else if (roll == 2) {
        return "style/images/two.png";
    }
    else if (roll == 3) {
        return "style/images/three.png";
    }
    else if (roll == 4) {
        return "style/images/four.png";
    }
    else if (roll == 5) {
        return "style/images/five.png";
    }
    else if (roll == 6) {
        return "style/images/six.png";
    }
}

var diceOne = Math.floor(Math.random() * 6) + 1;
var diceTwo = Math.floor(Math.random() * 6) + 1;

document.querySelector("#dice1").setAttribute("src", changeImage(diceOne));
document.querySelector("#dice2").setAttribute("src", changeImage(diceTwo));

var winner = document.querySelector("h1");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");

if (diceOne > diceTwo) {
    winner.innerHTML = "Player 1 wins 🙌";
    player1.innerHTML = "😜";
    player2.innerHTML = "😭";
}
else if (diceOne == diceTwo) {
    winner.innerHTML = "Draw!!";
    player1.innerHTML = "😒";
    player2.innerHTML = "😒";
}
else {
    winner.innerHTML = "Player 2 wins 🙌";
    player2.innerHTML = "😜";
    player1.innerHTML = "😭";
}