//alert("working")
var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

if(randomNumber1 > randomNumber2){
	//alert("1 wins");
	document.querySelector("h1")[0].innerHTML= "Player 1 wins!!!"

}
else if(randomNumber2 > randomNumber1){
	//alert("2 wins");
	document.querySelector("h1")[0].innerHTML = "Player 2 wins!!!"
}
else{
	//alert("Tie!!!");
	document.querySelector("h1")[0].innerHTML = "It's a tie!!!"
}

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;
var randomImageSource2 = "images/" + randomDiceImage2;


var diceImage1 = document.querySelectorAll("img")[0]
var diceImage2 = document.querySelectorAll("img")[1]

diceImage1.setAttribute("src", randomImageSource1);
diceImage2.setAttribute("src", randomImageSource2);


