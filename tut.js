var randomnumber1= Math.round(Math.random()*(6-1)+1);
var randomnumber2= Math.round(Math.random()*(6-1)+1);

var player1="dice"+randomnumber1+".png";
var player2="dice"+randomnumber2+".png";
var img1="images/"+player1;
var img2="images/"+player2;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",img1);

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",img2)
if(randomnumber1>randomnumber2)
document.querySelector("h1").innerHTML="Player1 won";
else if(randomnumber1<randomnumber2)
document.querySelector("h1").innerHTML="Player2 won";
else {

  document.querySelector("h1").innerHTML="It's a tie";
}
