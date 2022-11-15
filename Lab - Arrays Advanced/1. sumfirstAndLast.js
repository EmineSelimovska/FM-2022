function sumFirstAndLast(numbers) {
    let firstNum = Number(numbers.shift());
    let lastNum = Number(numbers.pop());
    let end = firstNum + lastNum;
    console.log(end);
}
sumFirstAndLast(['20', '30', '40'])