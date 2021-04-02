console.log("into");

var x;
var o;
var counter = 0; //check the number of moves-only in the 5 move we will check victory
var win = false;

function click1(x) {
    if (win) {
        return
    };
    if (document.getElementById("cube" + x).innerHTML == "") {
        if (counter % 2 == 0) {
            document.getElementById("cube" + x).innerHTML = "X";
        } else {
            document.getElementById("cube" + x).innerHTML = "O";
        }
    }
    counter++;
    checkvictory();
}

//this function checks posible options of victory
function checkvictory() {
    setof(1, 2, 3);
    setof(4, 5, 6);
    setof(7, 8, 9);
    setof(1, 4, 7);
    setof(2, 5, 8);
    setof(3, 6, 9);
    setof(1, 5, 9);
    setof(3, 5, 7);

}

//this function checks if the set of one player is a victory or not, and if yes  she turns win=true.
function setof(a, b, c) {
    var first = document.getElementById("cube" + a).innerHTML;
    var second = document.getElementById("cube" + b).innerHTML;
    var third = document.getElementById("cube" + c).innerHTML;

    if (first == second && second == third && third != "") {
        document.getElementById("MassageForUser").innerHTML = first + " " + "win!";
        document.getElementById("MassageForUser").style.borderWidth = "3px";
        document.getElementById("MassageForUser").style.marginLeft = "33vw";
        document.getElementById("MassageForUser").style.fontSize = "60px";
        document.getElementById("MassageForUser").style.fontFamily = "Indie Flower";
        win = true;
        if (win) {
            $('#game').fadeTo(2000, 0);
            $('#MassageForUser').fadeTo(2000, 0);
            setTimeout(function () {
                wewin();
                reset();
            }, 1500);

            $('#game').fadeTo(5000, 1);
            $('#MassageForUser').fadeTo(5000, 1);
        }
    }
}


//this function is the reset for the reset button
function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById("cube" + i).innerHTML = "";
        document.getElementById("cube" + i).style.backgroundColor = '#ffffff';
        document.getElementById("MassageForUser").innerHTML = "";
        win = false;
    }
    counter = 0;
}

function wewin() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 1000
    });

    Toast.fire({
        type: 'success',
        title: 'great'
    })

}