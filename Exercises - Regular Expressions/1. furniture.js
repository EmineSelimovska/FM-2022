function furniture(input) {
    let totalMoney = 0;
    let pattern = /[>]+(?<name>[A-Za-z]+)[<]+(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d]+)/g;
    let index = 0;
     console.log('Bought furniture:');
    while(input[index] !== 'Purchase'){
        let prodoctRow = input[index];
        let validProduct = pattern.exec(prodoctRow);

        while(validProduct !== null){
            let name = validProduct.groups.name;
            console.log(name);
            let price = validProduct.groups.price;
            let quantity = validProduct.groups.quantity;

            totalMoney += price * quantity;
           
            validProduct = pattern.exec(prodoctRow)

        }
        index++;
    }
console.log(`Total money spend: ${totalMoney.toFixed(2)} `);
    

    
    
}
furniture(['>>Sofa<<312.23!3',

'>>TV<<300!5',

'>Invalid<<!5',

'Purchase'])