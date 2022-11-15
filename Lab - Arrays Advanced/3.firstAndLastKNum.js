function firstAndLastKNumbers(input) {
    let count = input.shift();
    let firstNumber = input.slice(0,count);
    let lastNumber = input.slice(input.length - count);
    console.log(firstNumber.join(' '));
    console.log(lastNumber.join(' '));
    
}
firstAndLastKNumbers([2,
 7, 8, 9])