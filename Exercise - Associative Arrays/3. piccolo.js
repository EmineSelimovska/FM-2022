function piccolo(input) {
    let result = new Map();
    let commandArr = input.map(el => el.split(', '));

    for (const line of commandArr) {
       
        let command = line[0];
        let carNumber = line[1];

        if(command === 'IN'){
            result.set(carNumber,command);
        }else if(command === 'OUT'){
            result.delete(carNumber);
        }
       }
       
       
       let sorted = Array.from(result).sort((a,b) => a[0].localeCompare(b[0]));

       if(sorted.length === 0){
        console.log("Parking Lot is Empty");
       }
       sorted.forEach(el => {
        console.log(el[0]);
        
       });
      
    
}
piccolo([
'IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'
] )