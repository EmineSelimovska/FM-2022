function negativeOrPositiveNumbers(numbers) {
    let num = [];
    for (const el of numbers) {
        let n = Number(el);
        if(n < 0){
            num.unshift(n)
        }else{
            num.push(n)
        }
    }
    console.log(num.join('\n '));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])