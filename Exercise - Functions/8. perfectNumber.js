function perfectNumber(num) {
    let perfect = 0;
    for(let i = 1; i <= num/2; i++){
        if (num % i == 0){
            perfect += i;
        }
    }
    if (perfect === num && perfect !== 0){
        console.log( "We have a perfect number!" );
    }else {
        console.log("It's not so perfect.");
    }

}
perfectNumber(6)