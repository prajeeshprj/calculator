var buttons = document.getElementsByTagName("button");
var inputString = "";
var outputString ="";
var operantsarray ="";
var operatorsarray="";

for (var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",callAction);
}
function callAction(event){
    var button =event.target;
    var value = button.innerHTML;
    var actionType = button
    .classList[0] === "red-text"? "operator" : "operant";
    if(value ==="="){
        calculatorAnswer()
    }
    else{
        addInput(actionType,value)
        inputString  += value; 
    }
    console.log(operantsarray,operatorsarray);
    printInput();
    printOutput();
     
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
    document.getElementsByClassName("output-box")[0]
    .innerHTML = outputString || 0;
}
function addInput(actionType,value){

}
function calculatorAnswer(){

}