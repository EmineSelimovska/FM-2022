function storage(input) {
    let map = new Map();

    for (const line of input) {
        let [product,quantity] = line.split(' ');
        quantity = Number(quantity)

        if(!map.has(product)){
            map.set(product, +quantity);
        }else{
            let curQuantity = map.get(product);
            let newQuantity = curQuantity += quantity;
            map.set(product,newQuantity);
        }
        
    }
    for (const line of map) {
        console.log(`${line[0]} -> ${line[1]}`);
        
    }

    
}
storage(['tomatoes 10','coffee 5',
'olives 100','coffee 40'])