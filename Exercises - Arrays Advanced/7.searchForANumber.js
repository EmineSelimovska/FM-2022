function searchForANumber(nums,actions) {
    let number = actions[0];
    let takenNumbers = nums.slice(0,number);
     let numberToDelete = actions[1];
     let specialNumber = actions[2];
     takenNumbers.splice(0,numberToDelete);
     
     let count = 0;
     
     for (const el of takenNumbers) {
        if(el === specialNumber){
            count++;

        }

        
     }
     console.log(`Number ${specialNumber} occurs ${count} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7],

    [3, 1, 5] )