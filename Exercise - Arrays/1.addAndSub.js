function addAndSub(arr) {
    let sum = 0;
    let sum2 = 0;
    let even = 0;
    let odd = 0;
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        let arrIndex = Number(arr[i]);
        sum += arrIndex;
        if (arrIndex % 2 === 0){
            arrIndex += i;
            even += arrIndex;

            arr2.push(arrIndex);
        }else{
            arrIndex -= i;
            odd += arrIndex;
            arr2.push(arrIndex);
        }
       



        
    }
   
    console.log(arr2);
    console.log(sum);
    console.log(odd + even);

    
    
}
addAndSub([5, 15, 23, 56, 35] )