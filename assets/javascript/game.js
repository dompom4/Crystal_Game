var targetnumber = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var wins = 0;
var losses = 0;
var totalscore = 0;
var clicksound = new Audio("assets/audio/click.mp3");
var winsound = new Audio("assets/audio/win.mp3");
var losesound = new Audio("assets/audio/lose.mp3");
// functions to gen random numbers//
function randombig() {
     window.targetnumber = (18+Math.floor((Math.random() * 102 ) + 1));
}

function randomsmall(){
    window.crystal1 = (Math.floor((Math.random() *12) +1));
    window.crystal2 = (Math.floor((Math.random() *12) +1));
    window.crystal3 = (Math.floor((Math.random() *12) +1));
    window.crystal4 = (Math.floor((Math.random() *12) +1));
}

function newgame(){
   randomsmall();
   randombig();
   window.totalscore = 0;
}

function checkscore(){
    if (window.totalscore == window.targetnumber){
        winsound.play();
        alert("You have won!");
        window.wins = window.wins+1;
        $( "#win" ).html("Wins: "+wins);
        newgame();
        $( "#score" ).html("Total score: "+totalscore);
        $("#targetn").html("Lucky Number: "+targetnumber);
    } 
    else if (window.totalscore > window.targetnumber){
        losesound.play();
        alert("You lose! Game over!");
        window.losses = window.losses+1;
        $("#loss").html("Losses: "+losses);
        newgame();
        $( "#score" ).html("Total score: "+totalscore);
        $("#targetn").html("Lucky Number: "+targetnumber);
    }
    }
newgame();

