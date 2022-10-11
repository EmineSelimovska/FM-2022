function sumEvenNumbers(numbers) {
    let sum = 0;
    for(let count of numbers){
       let number = Number(count);
        
        if(number % 2 == 0){
            sum += number;
        

        
    }
    }
   
    console.log(sum);
}
sumEvenNumbers(['1','2','3','4','5','6'])