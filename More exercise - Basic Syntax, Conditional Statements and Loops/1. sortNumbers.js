function sortNumber(num1,num2,num3) {
    let numArray = [];
    numArray = Array(num1,num2,num3);

    let sorted =numArray.sort((a,b) => (b - a));
    
    console.log(sorted.join('\n'));
}
sortNumber(-2,1,3)