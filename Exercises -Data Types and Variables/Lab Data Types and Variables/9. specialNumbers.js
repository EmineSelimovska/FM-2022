function specialNumbers(num) {
    
   for(let i = 1; i <= num;i++){

    let digit = i % 10;
    digit += parseInt(i/10);
       
     if (digit === 5 || digit === 7 || digit === 11){
       console.log(`${i} -> True`);
     }else{
      console.log(`${i} -> False`);
    }
       
}
   
}
specialNumbers(20)