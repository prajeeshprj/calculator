var buttons = document.getElementsByTagName("button");
var inputString = "";
var outputString ="";
var operantsArray =[];
var operatorsArray=[];
var isLastOperator = true;
var isLastAnswer = false;

for (var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",callAction);
}
document.getElementsByClassName("reset-button")[0]
.addEventListener("click",restAll);
 
function restAll(){
     inputString = "";
     outputString ="";
     operantsArray =[];
     operatorsArray=[];
     isLastOperator = true;
     isLastAnswer = false
     printInput();
     printOutput();
}
function callAction(event){
    var button = event.target;
    button.style.backgroundColor = "black";
    button.style.color = "white";
    setTimeout(function(){
        button.style.backgroundColor = null;
        button.style.color = null;
    },300)
    var value = button.innerHTML;
    var actionType = button
    .classList[0] === "chuvapp"?"operator":"operant";
    if(value ==="="){
        calculatorAnswer()
        printOutput();
    }
    else{
        if(addInput(actionType,value)) inputString += value;
        printInput();
    }
    console.log(operantsArray,operatorsArray)
     
}
function printInput(){

    document.getElementsByClassName("input-box")[0]
    .innerHTML = inputString || 0;
    // if(inputString === ""){
    //     document.getElementsByClassName("input-box")[0]
    //     .innerHTML = 0;
    // }
    // else{
    //     document.getElementsByClassName("input-box")[0]
    //     .innerHTML = inputString;
    // }
}
function printOutput(){
    document.getElementsByClassName("output-box")[0].innerHTML = outputString || 0;
}

function addInput(actionType,value){
   
     if(actionType === "operator"){
         if(isLastOperator)return false;
         operatorsArray.push(value)
         isLastOperator = true;
         return true
        
     } 
     if (isLastAnswer) restAll()
     if(isLastOperator){
         operantsArray.push(value)
         isLastOperator = false;
         return true
         
    }
     operantsArray[operantsArray.length - 1]+=value;
    return true
}
function calculatorAnswer(){
    for(var j = 0; j < 2; j++){
        for(var i = 0;i < operatorsArray.length;i++){
            if(j===0 && (operatorsArray[i] === "*"||
            operatorsArray[i] ==="/")){
            performAction(i);
           }
           if(j !==0){
               performAction(i)
           }
        }
        
    } isLastAnswer = true
    outputString = operantsArray[0];
    inputString = operantsArray[0];
  

}    

function performAction(index){
    var result = 0;
    switch(operatorsArray[index]){
        case "+":
            result = Number(operantsArray[index]) + Number(operantsArray[index+1])
        break;
        case "-":
            result = operantsArray[index] - operantsArray[index+1]
        break;
        case "/":
            result = operantsArray[index] / operantsArray[index+1]
        break;
        case "*":
            result = operantsArray[index] * operantsArray[index+1]
        break;
    }
    operantsArray[index]=result;
    operantsArray.splice(index+1,1)
    operatorsArray.splice(index,1)
}