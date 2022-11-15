function train(array) {
    let wagons = array
    .shift()
    .split(' ')
    .map(Number)
    let maxCapacity = array.shift();
    for(let i = 0; i < array.length; i++){
     let currentArray = array[i].split(' ')
       if(currentArray[0] == 'Add'){
        let newWagonsPassigers = Number(currentArray[1]);
        wagons.push(newWagonsPassigers)
       }else  {
        for(let j = 0; j < wagons.length; j++){
            if(wagons[j] + Number(currentArray[0]) <= maxCapacity){
                wagons[j] += Number(currentArray[0]);
                break;
            }


        }
    }
    
 }
 console.log(wagons.join(' '));
    
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])