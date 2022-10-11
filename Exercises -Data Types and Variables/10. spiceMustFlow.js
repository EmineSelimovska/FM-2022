function spiceMustFlow(startingYield) {

    let totalAmounts = 0; 
    let countDay = 0;
    let workDay = 0;
    while(startingYield >= 100){
        
            totalAmounts += (startingYield - 26);
            startingYield -= 10;
            countDay++; 
      }

    
    if (totalAmounts > 0) {
                
        console.log(countDay);

        console.log(totalAmounts - 26);


}else{
   
    console.log(countDay);

    console.log(totalAmounts);

}
    
    
    
  
}
spiceMustFlow(111);