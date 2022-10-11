function sumElements(number) {
    let firstNum = number[0];
    let lastNum = number[number.length - 1];
    let sum = firstNum + lastNum;
    console.log(sum);
}
sumElements([20, 30, 40])