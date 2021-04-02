console.log("into file");


function myClick(num){
    console.log(num);
//    $("#answerScreen").val()=;

   document.getElementById("answerScreen").value+=num;
    
}


function equal(){
    document.getElementById("answerScreen").value=eval(document.getElementById("answerScreen").value);

    // $("#answerScreen").val() = eval($("#answerScreen").val())
}

function erase(){
    document.getElementById("answerScreen").value="";
}