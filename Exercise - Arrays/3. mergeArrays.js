function mergeArrays(arr1,arr2) {
   let even = 0;
   let odd = 0;
    let resultArray = [];
    for(let i = 0; i < arr1.length; i++){
        if(i % 2 === 0){
            even = Number(arr1[i]) + Number(arr2[i])
            resultArray.push(even);

        }else{
            odd = arr1[i] + arr2[i];
            resultArray.push(odd);
        }
       
    }
    console.log(resultArray.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])