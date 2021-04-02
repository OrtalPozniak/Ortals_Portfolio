let letter;
let counter = 0;
let win = false;
let player = 'red';


var A = [circ36, circ29, circ22, circ15, circ8, circ1];
var B = [circ37, circ30, circ23, circ16, circ9, circ2];
var C = [circ38, circ31, circ24, circ17, circ10, circ3];
var D = [circ39, circ32, circ25, circ18, circ11, circ4];
var E = [circ40, circ33, circ26, circ19, circ12, circ5];
var F = [circ41, circ34, circ27, circ20, circ13, circ6];
var G = [circ42, circ35, circ28, circ21, circ14, circ7];

// for checkSide function
// var row1 = []
// var row2 = []
// var row3 = []
// var row4 = []
// var row5 = []
// var row6 = []


// for slant function
var slantBottomR1 = [circ22, circ16, circ10, circ4];
var slantBottomR2 = [circ29, circ23, circ17, circ11, circ5];
var slantBottomR3 = [circ36, circ30, circ24, circ18, circ12, circ6];
var slantBottomR4 = [circ37, circ31, circ25, circ19, circ13, circ7];
var slantBottomR5 = [circ38, circ32, circ26, circ20, circ14];
var slantBottomR6 = [circ39, circ33, circ27, circ21];

var slantBottomL1 = [circ28, circ20, circ12, circ4];
var slantBottomL2 = [circ35, circ27, circ19, circ11, circ3];
var slantBottomL3 = [circ42, circ34, circ26, circ18, circ10, circ2];
var slantBottomL4 = [circ41, circ33, circ25, circ17, circ9, circ1];
var slantBottomL5 = [circ40, circ32, circ24, circ16, circ8];
var slantBottomL6 = [circ39, circ31, circ23, circ21];

//the Moving Disc
var theThing = document.querySelector("#cursor");

$(document).mousemove(function (e) {

    $('#cursor').css({ left: e.pageX -(theThing.offsetWidth * 4)  });
});   //this function is responsible for the moving disc on the top of the table


document.getElementById("cursor").style.backgroundColor = "red"; //the first player is red

function click1(letter) {
    // console.log(letter);


    let newCell = checkForEmptyCellInTheColum(letter); //into the newcell we enter the show of the specific circle
    console.log(newCell.id);
    if (counter % 2 == 0) {
        newCell.style.backgroundColor = "red";
        player = 'red';
        document.getElementById("cursor").style.backgroundColor = "yellow";
    } else {
        newCell.style.backgroundColor = "yellow";
        player = 'yellow';
        document.getElementById("cursor").style.backgroundColor = "red";
    }

    counter++; //to know which player is playing right now
    checkWin(letter, newCell.id, newCell.getAttribute("data-row"), newCell.getAttribute("data-Col"), newCell, player);

    // checkvictory(newCell);
}


function checkForEmptyCellInTheColum(letter) {

    switch (letter) {
        case 'A':
            var firstToPaint = false;
            var emptyCircle = null;
            A.forEach((circle1) => {
                if (firstToPaint == false && circle1.style.backgroundColor == "") {
                    firstToPaint = true;
                    emptyCircle = circle1;
                }
            });
            return emptyCircle;


        case 'B':
            var firstToPaint = false;
            var emptyCircle = null;
            B.forEach((circle1) => {
                if (firstToPaint == false && circle1.style.backgroundColor == "") {
                    firstToPaint = true;
                    emptyCircle = circle1;
                }
            });
            return emptyCircle;


        case 'C':
            var firstToPaint = false;
            var emptyCircle = null;
            C.forEach((circle1) => {
                if (firstToPaint == false && circle1.style.backgroundColor == "") {
                    firstToPaint = true;
                    emptyCircle = circle1;
                }
            })
            return emptyCircle;

        case 'D':
            var firstToPaint = false;
            var emptyCircle = null;
            D.forEach((circle1) => {
                if (firstToPaint == false && circle1.style.backgroundColor == "") {
                    firstToPaint = true;
                    emptyCircle = circle1;
                }
            })
            return emptyCircle;

        case 'E':
            var firstToPaint = false;
            var emptyCircle = null;
            E.forEach((circle1) => {
                if (firstToPaint == false && circle1.style.backgroundColor == "") {
                    firstToPaint = true;
                    emptyCircle = circle1;
                }
            })
            return emptyCircle;

        case 'F':
            var firstToPaint = false;
            var emptyCircle = null;
            F.forEach((circle1) => {
                if (firstToPaint == false && circle1.style.backgroundColor == "") {
                    firstToPaint = true;
                    emptyCircle = circle1;
                }
            })
            return emptyCircle;

        case 'G':
            var firstToPaint = false;
            var emptyCircle = null;
            G.forEach((circle1) => {
                if (firstToPaint == false && circle1.style.backgroundColor == "") {
                    firstToPaint = true;
                    emptyCircle = circle1;
                }
            })
            return emptyCircle;
    }
}
function checkSide(dataRow, letter) {
    console.log("dataRow: " + dataRow);

    let cellOnTheSameRow = document.querySelectorAll(`[data-row='${dataRow}']`); //es6

    if (letter == 'A')
        col = 1;
    else if (letter == 'B')
        col = 2;
    else if (letter == 'C')
        col = 3;
    else if (letter == 'D')
        col = 4;
    else if (letter == 'E')
        col = 5;
    else if (letter == 'F')
        col = 6;
    else
        col = 7;
    console.log("dataCol: " + col);
    let countRedWin = 0;
    let countYellowWin = 0;

    
    for (let i = cellOnTheSameRow[col]; i < cellOnTheSameRow[col + 4]; i++) {
        if (cellOnTheSameRow[i].style.backgroundColor == "red") {
            countRedWin++;
            console.log(countRedWin);
            if (countRedWin == 4) {
                console.log("red player win");
            } else {
                console.log("no one wins");
            }
        } else if (cellOnTheSameRow[i].style.backgroundColor == "yellow") {
            countYellowWin++;
            console.log(countYellowWin);
            if (countYellowWin == 4) {
                console.log("yellow player win");
            } else {
                console.log("no one wins");

            }
        } else
            break;
    }
    

}


function checkWin(letter, row, col, dataRow, dataCol, newCell) {
    console.log( newCell);

    // col = col.slice(4, 6);
    // col = Number(col);


    // if (row == 'A')
    //     row = A;
    // else if (row == 'B')
    //     row = B;
    // else if (row == 'C')
    //     row = C;
    // else if (row == 'D')
    //     row = D;
    // else if (row == 'E')
    //     row = E;
    // else if (row == 'F')
    //     row = F;
    // else
    //     row = G;


    // checkUp(letter, dataRow, dataCol);
    checkSide(dataRow, letter);
    // allSlant(col);
    // checkObliqueLineLeft(dataRow,dataCol,newCell);

}

// let backgroundColor = "";
// for (let i = 0; i < allDivsWithColNum.length; i++) {
//     backgroundColor += allDivsWithColNum[i].style.backgroundColor + " "
// }
// console.log(backgroundColor);

// colorsOnTheColum = backgroundColor;

// colorsOnTheColum = colorsOnTheColum.split(" ")
// colorsOnTheColum.pop()
// console.log(colorsOnTheColum);

// if (letter[3] != "") {
//     for (let j = 1; j < letter.length; j++) {

//         if (letter[j] == letter[j + 1] && letter[j] == letter[j - 1] && letter[j] == letter[j - 2])
//             console.log(`player ${player} is won!!`);

//     }

// }




   // var colors = "";

    // for(let i = 0; i < row.length; i++){

    //    colors += row[i].style.backgroundColor + " ";
    // }
    // // console.log(colors);


    // colors = colors.split(" ") 
    // colors.pop()
    // // console.log(colors);

    // if(colors[3] !=""){
    //     for(let j = 1; j < colors.length; j++){

    //         if(colors[j] == colors[j+1] && colors[j] == colors[j-1] && colors[j] == colors[j-2])
    //             console.log(`player ${player} is won!!`);

    //     }

    // }

// function checkSide(dataRow, dataCol, letter) {

//     console.log("dataRow: " + dataRow);


//     let cellOnTheSameRow = document.querySelectorAll(`[data-row='${dataRow}']`); //es6

//     if (dataRow == 1)
//         row = row1;
//     else if (dataRow == 2)
//         row = row2;
//     else if (dataRow == 3)
//         row = row3;
//     else if (dataRow == 4)
//         row = row4;
//     else if (dataRow == 5)
//         row = row5;
//     else if (dataRow == 6)
//         row = row6;
//     else
//         row = row7;


//     if (letter == 'A')
//         col=1;
//     else if (letter == 'B')
//         col=2;
//     else if (letter == 'C')
//         col=3;
//     else if (letter == 'D')
//         col=4;
//     else if (letter == 'E')
//         col=5;
//     else if (letter == 'F')
//         col=6;
//     else
//        col=7;
//     console.log("dataCol: " + col);
//     let countRedWin=0;
//     let countYellowWin=0;


//         for(let i=cellOnTheSameRow[dataRow];i<cellOnTheSameRow[dataRow+4];i++){
//             if(cellOnTheSameRow[i].style.backgroundColor=="red"){
//                 countRedWin++;
//                 console.log(countRedWin);
//                 if(countRedWin==4){
//                     console.log("red player win");
//                 }else{
//                     console.log("no one wins");
//                 }
//             }else if(cellOnTheSameRow[i].style.backgroundColor=="yellow"){
//                 countYellowWin++;
//                 console.log(countYellowWin);
//                 if(countYellowWin==4){
//                     console.log("yellow player win");
//                 }else{
//                     console.log("no one wins");

//                 }
//             }else
//             break;
//         }

//     // let backgroundColor = "";
//     // for (let i = 0; i < allDivsWithRowNum.length; i++) {
//     //     backgroundColor += allDivsWithRowNum[i].style.backgroundColor + " "
//     // }
//     // console.log(backgroundColor);

//     // row = backgroundColor;

//     // row = row.split(" ")
//     // row.pop()
//     // console.log(row);

//     // if (row[3] != "") {
//     //     for (let j = 1; j < row.length; j++) {

//     //         if (row[j] == row[j + 1] && row[j] == row[j - 1] && row[j] == row[j - 2])
//     //             console.log(`player ${player} is won!!`);

//     //     }

//     // }

// }
// function checkUp(letter){

//     let allDivsWithColNum = document.querySelectorAll(`[data-Col='${letter}']`); //es6
//     console.log(letter);

//     if(dataCol == 1)
//     col = col1;
// else if(dataCol == 2)
//     col = col2;
// else if(dataCol == 3)
//     col = col3;
// else if(dataCol == 4)
//     col = col4;
// else if(dataCol == 5)
//     col = col5;
// else if(dataCol == 6)
//     col = col6;
// else
//     col = col7;

//  function checkvictory(newCell) {
//      var num=0;
//      console.log(newCell);

//     for(i=0; i<4;i++){
//         var countOfRed=0;
//         var countOfYellow=0;
//         var idElem = newCell.id;

//         splitId = idElem.split("circ"); //the function split, splits between string and number
//         if(("circ" + splitId[0] + num).style.backgroundColor == "red"||("circ" + splitId[0] - num).style.backgroundColor == "red" ){
//             countOfRed++;
//         }else if(("circ" + splitId[0] + num).style.backgroundColor == "yellow"||("circ" + splitId[0] - num).style.backgroundColor == "yellow"){
//             countOfYellow++;
//         }else{
//             break;
//         }
//         num ++;
//         if(countOfRed == 4){
//             console.log("red win");
//         }else if(countOfYellow==4){
//             console.log("yellow win");
//         }
//     }
// }

// function checkObliqueLineLeft(dataRow,dataCol,newCell){

//     let allDivsWithRowNum = document.querySelectorAll(`[data-row='${dataRow}']`);


//         if(dataRow == 1)
//         row = rowObliqueLineLeft1;
//     else if(dataRow == 2)
//         row = rowObliqueLineLeft2;
//     else if(dataRow == 3)
//         row = rowObliqueLineLeft3;
//     else if(dataRow == 4)
//         row = rowObliqueLineLeft4;
//     else if(dataRow == 5)
//         row = rowObliqueLineLeft5;
//     else if(dataRow == 6)
//         row = rowObliqueLineLeft6;
//     else
//         row = rowObliqueLineLeft7;

//     let backgroundColor = "";
//     for (let i = 0; i < allDivsWithRowNum.length; i++) {
//             backgroundColor += allDivsWithRowNum[i].style.backgroundColor + " "
//     }

//     row = backgroundColor;



//     row = row.split(" ")
//     row.pop()
//     dataRow = Number(dataRow)


    // if (dataRow < 1)
    //     return

    // console.log(checkObliqueLineLeft(dataRow - 1));

    // if(row[3] !=""){
    //     for(let j = 1; j < row.length; j++){

    //         if(row[j] == row[j+1] && row[j] == row[j-1] && row[j] == row[j-2])
    //             console.log(`player ${player} is won!!`);

    //     }

    // }


// }

// function allSlant(col){
//     topLeft(col);
//     topRight(col);
//     downLeft(col);
//     downRight(col); 
//     if(xx || xy || XPathEvaluator ||xcc ){
//         // player win!
//     }
// }

// function topLeft(){
//     console.log();
//     let backgroundColor = "";
//     for(let i=0;i<){
//             backgroundColor += allDivsWithRowNum[i].style.backgroundColor + " "
//     }
//     console.log(backgroundColor);

//     row = backgroundColor;

//     row = row.split(" ")
//     row.pop()
//     console.log(row);


//     if(row[3] !=""){
//         for(let j = 1; j < row.length; j++){

//             if(row[j] == row[j+1] && row[j] == row[j-1] && row[j] == row[j-2])
//                 console.log(`player ${player} is won!!`);

//         }

//     }
// }

