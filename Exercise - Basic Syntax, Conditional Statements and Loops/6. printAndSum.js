function printAndSum(firstNum,secondNum) {
    let sum = 0;
    let output = "";
    for(let i = firstNum; i <= secondNum; i++){
        
      sum += i;
      output +=  `${i} `; 
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}
printAndSum(5,10)