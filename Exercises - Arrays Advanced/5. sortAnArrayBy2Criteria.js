function sortAnArrayBy2Criteria(array) {
    let sorted = array.sort((a,b) => {
     return a.length - b.length || a.localeCompare(b);
    });

   sorted.forEach(el => {
    console.log(el);
    
   });
}
sortAnArrayBy2Criteria(['alpha','beta','gamma'])