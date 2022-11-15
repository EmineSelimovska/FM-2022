function address(input) {
    let addressBook = {};

    for (const line of input) {
        let [name,address] = line.split(':');
        addressBook[name] = address;
       
    }
    let addressBookEntry = Object.entries(addressBook)
    let sort = addressBookEntry.sort((kvpA,kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for(let [name,address] of sort){
        console.log(`${name} -> ${address}`);
    }
   
    
}
address(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])