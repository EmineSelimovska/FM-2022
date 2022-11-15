function distinctArray(input) {

    let uniqueNumber = [];
   
    for (let i = 0; i < input.length; i++) {
        let num = input[i];
        if(!uniqueNumber.includes(num)){
            uniqueNumber.push(num);
        }

       
        
    }
    console.log(uniqueNumber.join(' '));
    
}
distinctArray([7, 8, 9, 7, 2, 3,4, 1, 2] )