console.log("into file");

var num1 = 0;
var num2 = 0;
var totalscore=0;
var answer = 0;
var op= "";
var success = ["great", "excellent", "you so smart", "amazing","wow you are a genius","super!"];
var realAnswer=0;

numbers();
operator();

document.getElementById("number1").innerHTML = num1;
document.getElementById("number2").innerHTML = num2;
document.getElementById("operator").innerHTML = op;

//function put values for the variables

function numbers(){
    num1=Math.floor((Math.random()*10)+1);
    num2=Math.floor((Math.random()*10)+1);
    if(num1<num2){
        numbers();
    }
    console.log(num1,num2);
}

//function checks and Throwing up encouragement

document.getElementById("aquaGradient").onclick = function checkAnswer(){

    answer=document.getElementById("answer").value;
    checkOp();
    if(realAnswer==answer){
        var myp=document.createElement("p");
        myp.setAttribute("id","MessageForUser");
        myp.setAttribute("class","animated slow tada");
        myp.innerHTML = success[ Math.floor(Math.random() * 6)];
        document.getElementById("msg").appendChild(myp);
        totalscore+=10;
        
    setTimeout(function(){
        nextquestion();
        document.getElementById("msg").innerHTML="";
        },2000);
    
    } else {
        var myp=document.createElement("p");
        myp.setAttribute("id","MessageForUser");
        myp.setAttribute("class","animated slow tada");
        myp.innerHTML ="it's ok,try again sweetheart";
        document.getElementById("msg").appendChild(myp); 
        totalscore+=1;
    }
    document.getElementById('scoreDisplay').innerHTML=totalscore;
    console.log(totalscore);

};

//function tells us what action we need to do acording to the operator we get
function checkOp(){
    if(op=="+"){
        realAnswer=num1+num2;
    }else if(op=="-"){
        realAnswer=num1-num2;
    }else if(op=="*"){
        realAnswer=num1*num2;
    }else{
        if(num1%num2!==0){
            numbers();
        }

        realAnswer=num1/num2;
    }
}

//function gives us the operator
function operator(){
    var x = Math.floor((Math.random()*4)+1);

    switch (x){
        case 1:
        return op="+";
        case 2:
        return op = "-";
        case 3:
        return op = "*";
        case 4:
        return op = "/";
    }
}

function nextquestion(){
    document.getElementById("number1").innerHTML = "";
document.getElementById("number2").innerHTML = "";
document.getElementById("operator").innerHTML ="";
document.getElementById("answer").value="";
numbers();
document.getElementById("number1").innerHTML = num1;
document.getElementById("number2").innerHTML = num2;
document.getElementById("operator").innerHTML = op;
}

$("#btn-calculator").click(function(){
    
    $("#showCalc").slideToggle("slow")
});

$("#btn-Multiplication").click(function(){
    
    $("#showMulti").slideToggle("slow")
});




