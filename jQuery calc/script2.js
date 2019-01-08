let counter = 0;
let arr = [];
let regex = /(\d*)(\D)(\d*)/;
let result;
let firstNum;
let firstOp;
let secondNum;
let sum = 0;

$('.numButtons, .opButtons').on('click', function(event) {
    let btn = event.target.value;
    arr[counter] = btn;
    counter++;
    let calcStringWithComma = arr.toString();
    let calcString = calcStringWithComma.replace(/,/g,"");
    result = calcString;
    // console.log(result);
});
function firstNumber(result){
    let num1 = result.match(regex);
    numOne = num1[1];
    firstNum = Number(numOne);
    return firstNum;
}
function firstOperator(result){
    let num1 = result.match(regex);
    firstOp = num1[2];
    return firstOp;
}
function secondNumber(result){
    let num1 = result.match(regex);
    numTwo = num1[3];
    secondNum = Number(numTwo)
    return secondNum;
}
function equal(firstNum,firstOp,secondNum){
    if(firstOp === "+"){
        sum = firstNum + secondNum;
        return sum;
    }
    else if (firstOp === "-"){
        sum = firstNum - secondNum;
        return sum;
    }
    else if (firstOp === "*"){
        sum = firstNum * secondNum;
        return sum;
    }
    else if (firstOp === "/"){
        sum = firstNum / secondNum;
        return sum;
    }
}
$('#buttonEqual').on('click', function(){
    resolveString();
})

function resolveString(){
    while(result.match(regex)){
        firstNumber(result);
        firstOperator(result);
        secondNumber(result);
        var rez = equal(firstNum,firstOp,secondNum);
        let num1 = result.match(regex);
        numOne = num1[1];
        numTwo = num1[3];
        var position = numOne.length + numTwo.length +1;
        var tmp = rez + result.substring(position,result.length);
        result = tmp;
        console.log(result);
    }
    $('#display').text(result);
}
$('#buttonCe').on('click',function clean(){
    result = "";
    $('#display').text('0');
});
