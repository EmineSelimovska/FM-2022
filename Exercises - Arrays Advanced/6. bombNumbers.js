function bombNumbers(firstArray,secondArray) {
    let specialNumber = secondArray[0];
    let power = secondArray[1];
    let sum = 0;
   
    for(let i = 0; i < firstArray.length; i++){
        let count = firstArray[i];
        if(count === specialNumber){
            if(i - power < 0){
                firstArray.splice(0,(power * 2 + 1));
            }else{
                firstArray.splice((i - power), (power * 2 + 1));
                i = 0;
            }

        }
    }
     
    for(let i = 0; i < firstArray.length; i++){
         let num = firstArray[i];
               sum += num;
       }
       console.log(sum);
}
bombNumbers([1, 7, 7, 1, 2, 3],

    [7, 1] )