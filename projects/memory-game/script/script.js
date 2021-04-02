console.log("into");

var firstFlip = true;
var firstCard;
var secondCard;
var lockCard = false;
var match=0;
var clicks = 0;
var score = 0;


$("#score").html(localStorage.score);


mix(); //A function that mixes the cards


$(".card").on("click", function () { //the function get to action in a click on everyone of the class "card"

    if (lockCard) {
        return;
    }

    if (this == firstCard) {//if you try to click twice on the same card
        return;
    }

    $(this).toggleClass("show");


    if (firstFlip) {
        firstFlip = false;
        firstCard = this;
    } else {
        firstFlip = true
        secondCard = this;
        clicks ++; //Count the number of moves in the game
        $("#flips").html(clicks); //This line updates the number of moves in the game in real time
        checkMatch() 
    }
})


function checkMatch() {
    if ($(firstCard).data("img") == $(secondCard).data("img")) {//here we check if the cards match and if they do match we will enter to this block
        console.log("Match");
        score += 5;
        match++;
        $("#score").html(score) 

        $(firstCard).off("click");  //this function remove the event "on" click because we have
        $(secondCard).off("click");// allready got the match and we don't want to flip the cards again
        
        // if(match=6){
        //     $(".finish").toggleClass("show");
        // }

    } else { //In a situation that does not match

        lockCard = true;

        setTimeout(function () {

            $(firstCard).toggleClass("show");
            $(secondCard).toggleClass("show");

            lockCard = false;
        }, 1100)
    }
}

function mix() {
     var parent = $("#game-container");
     var allCards = parent.children();
     while (allCards.length) {
        parent.append(allCards.splice(Math.floor(Math.random() * allCards.length), 1)[0]);
     }
}





// const cards = document.querySelectorAll('.finish');
// (function mix() {
//     cards.forEach(card => {
//         let randomPos =Math.floor(Math.random()*12);
//         card.style.order= randomPos;
//     });
// })();

// cards.forEach(card => card.addEventListener('click', flipCard));

