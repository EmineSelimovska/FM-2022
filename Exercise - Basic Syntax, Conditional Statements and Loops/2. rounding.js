function rounding(firstNum,secondNum) {
    if (secondNum > 15){
        secondNum = 15;
    }
    firstNum = firstNum.toFixed(secondNum)
    console.log(parseFloat(firstNum));
}
rounding(3.1415926535897932384626433832795,2)