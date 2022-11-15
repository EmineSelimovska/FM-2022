function storeProvision(product,delivary) {

    let provision = {};
    for(let i = 0; i < product.length; i += 2){
        let name = product[i];
       provision[name] = Number(product[i + 1]);
    }
    for(let j = 0; j < delivary.length; j += 2){
    let name = delivary[j];
    if(!provision.hasOwnProperty(name)){
        provision[name] = 0;

    }
    provision[name] += Number(delivary[j + 1]);
    }
    for (const product in provision) {
        console.log(`${product} -> ${provision[product]} `);
    }
    
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas',
                '14', 'Pasta', '4', 'Beer', '2'],
    
    ['Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'])