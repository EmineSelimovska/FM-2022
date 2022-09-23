function division(num) {
    let devisibleA = 0;
    let devisibleB = 0;
    
   if (num % 10 === 0){
    devisibleB = 10;
   } else if (num % 7 === 0){
    devisibleB = 7;
   }else if (num % 6 === 0){
     devisibleB = 6;
   }else if ( num % 3 === 0){
   devisibleB = 3;
   }else if(num % 2 === 0){
    devisibleB = 2;
   }
   
   if (devisibleB <= 0){
    console.log("Not divisible")
}else if(devisibleB > 0){
        console.log(`The number is divisible by ${devisibleB}`);
}
    

    
}
division(30)