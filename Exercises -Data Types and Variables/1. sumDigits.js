function sumDigits(num) {
     let numberAsString = num.toString();
    let sum = 0;
    let numOfDigit = numberAsString.length;
    
    for(let i = 0; i < numOfDigit; i++){
        let countNum = Number(numberAsString[i]);
        sum += countNum;
       
    }
    console.log(sum);
}
sumDigits(245678)