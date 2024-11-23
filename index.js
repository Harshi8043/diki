var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".svg";

var randomImagesource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImagesource2 = "images/dice" + randomNumber2 + ".svg";

document.querySelectorAll("img")[1].setAttribute("src", randomImagesource2);

if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Won 🚩";
} 
else if (randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Won 🚩";
}
 else[(document.querySelector("h1").innerHTML = "Draw 😅")];
