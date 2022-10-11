function condenseArrayToNumber(num) {
    while(num.length > 1){
        let condensed = Array(num.length - 1);
        for(let i = 0; i < num.length - 1; i++){
            condensed[i] = Number(num[i]) + Number(num[i + 1]);  
        }
        num = condensed
    }
    console.log(num[0])
}
condenseArrayToNumber([2,10,3])