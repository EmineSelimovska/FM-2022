function signCheck( numOne, numTwo, numThree) {
    if (numOne > 0 && numTwo > 0 && numThree < 0){
        console.log( "Negative");
    }else if (numOne < 0 && numTwo < 0 && numThree > 0){
        console.log("Positive");
    }else if (numOne < 0 && numTwo < 0 && numThree < 0){
        console.log("Negative");
    }else if (numOne < 0 && numTwo > 0 && numThree > 0){
        console.log("Negative");
    }else if (numOne > 0 && numTwo > 0 && numThree > 0){
        console.log("Positive");
    }else if (numOne > 0 && numTwo < 0 && numThree > 0){
        console.log("Negative");
    }else if (numOne == 0 || numTwo == 0 || numThree == 0){
        console.log("Positive");
    }else if (numOne > 0 && numTwo < 0 && numThree < 0){
        console.log("Positive");
    }
}
signCheck(5,12,-15)