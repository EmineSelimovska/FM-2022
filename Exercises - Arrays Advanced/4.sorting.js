function sorting(arr) {
    let sorting = arr.sort((a,b) => a - b);
    let resultArray = [];
   
    for(let i = 0; i < sorting.length; i++){
       let firstNum = sorting.shift();
       let lastNum = sorting.pop();
       resultArray.push(lastNum);
       resultArray.push(firstNum);

       
    }
    resultArray.push(sorting.pop());
    resultArray.push(sorting.shift());
    
    console.log(resultArray.join(' '));


}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])