function evenAndOddSub(arr) {
    let even = 0;
    let odd = 0;
    let sum = 0;
    for(let i of arr){
        let num = Number(i);
        if(num % 2 == 0){
            even += num;
        }else{
            odd += num
        }
        sum = even - odd;
    }
    console.log(sum);
}
evenAndOddSub([3,5,7,9] )