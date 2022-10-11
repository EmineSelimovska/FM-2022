function magicSum(arr,sum) {
   
    for(let i = 0; i < arr.length; i++){
        let currentNum = Number(arr[i]);
    for(let j = i + 1; j < arr.length; j++){
        let currentNumber = Number(arr[j]);
        if (currentNum + currentNumber === sum){
        
        console.log(currentNum + ' ' + currentNumber);
       
        }
       }
       
    }
   
    
}
magicSum([1, 7, 6, 2, 19, 23],8)