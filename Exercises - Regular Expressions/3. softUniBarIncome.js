function softUniBarIncome(input) {
    let pattern = /%(?<costumer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^0-9|$%.]*(?<price>[0-9|\.]+)\$/g;
    let command = input.shift();
    let totalIncome = 0;

    while(command !== 'end of shift'){
        let currentData = pattern.exec(command);

        if(currentData){
            let currentCostumer = currentData.groups.costumer;
            let currentProduct = currentData.groups.product;
            let currentCount = Number(currentData.groups.count);
            let currentPrice = Number(currentData.groups.price);

            let totalProductPrice = currentCount * currentPrice;
            console.log(`${currentCostumer}: ${currentProduct} - ${totalProductPrice.toFixed(2)}`);
           
            totalIncome += totalProductPrice;

            command = input.shift();
            currentData = pattern.exec(command);
        }else{
            command = input.shift();
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);


    
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'] )