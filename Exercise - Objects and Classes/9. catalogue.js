function catalogue(input) {
    let catalogue = {}
    input.forEach(line => {
        let[name,price] = line.split(' : ');
        let letter = name[0];

        if(catalogue.hasOwnProperty(letter) === false){
            catalogue[letter] = {};
        }
        catalogue[letter][name] = price;
        
        
    });
    const sortedKeys = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    for (let key of sortedKeys) {
        console.log(key);
        const sortedProducts = Object.keys(catalogue[key])
            .sort((a, b) => a.localeCompare(b));

        for (let keyP of sortedProducts) {
            console.log(`  ${keyP}: ${catalogue[key][keyP]}`);
        }
    }
   
}
catalogue(['Appricot : 20.4','Fridge : 1500',
'TV : 1499','Deodorant : 10','Boiler : 300','Apple : 1.25',
'Anti-Bug Spray : 15','T-Shirt : 10'])