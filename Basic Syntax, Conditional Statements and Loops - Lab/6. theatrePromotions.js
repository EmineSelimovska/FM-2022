function theatrePromotions(typeOfDay,age){
    let ticket = 0;
    switch (typeOfDay) {
        case "Weekday":
            if (0 <= age && age <= 18 ){
                ticket = 12;
                console.log(`${ticket}$`);

            }else if (18 < age && age <= 64) {
                ticket = 18;
                console.log(`${ticket}$`);
            }else if(64 < age && age <= 122){
                ticket = 12;
                console.log(`${ticket}$`);
            }else{
                ticket = "Error";
                console.log("Error!");
            }
            
            break;
        case "Weekend":
            if (0 <= age && age <= 18 ){
                ticket = 15;
                console.log(`${ticket}$`);
            }else if (18 < age && age <= 64) {
                ticket = 20;
                console.log(`${ticket}$`);
            }else if(64 < age && age <= 122){
                ticket = 15;
                console.log(`${ticket}$`);
            }else{
                ticket = "Error";
                console.log("Error!");
            }
            
            break;
        case "Holiday":
            if (0 <= age && age <= 18 ){
                ticket = 5;
                console.log(`${ticket}$`);
            }else if (18 < age && age <= 64) {
                ticket = 12;
                console.log(`${ticket}$`);
            }else if(64 < age && age <= 122){
                ticket = 10;
                console.log(`${ticket}$`);

            }else{
                ticket = "Error";
                console.log("Error!");
            }
           
            break;
            
    
       
    }
    

}
theatrePromotions('Holiday', 15)
