function palindromeIntegers(numArray) {
    let numArrayLength = numArray.length
    for(let i = 0; i < numArrayLength; i++){
        let arr = numArray[i].toString();
        let reversedArr = arr.split('').reverse().join('');
        if(arr === reversedArr){
            console.log(true);
        }else{
            console.log(false);
        }

    }
}
palindromeIntegers([123,323,421,121]);