function companyUsers(input) {
    let result = {};
    input.forEach(el => {
        let [companyName,personID] = el.split(' -> ');
        if(!result.hasOwnProperty(companyName)){
            result[companyName] = [];
        }
        result[companyName].push(personID);
        
    });
    let sortedCompamnies = Object.entries(result).sort((a,b) => a[0].localeCompare(b[0]));

    sortedCompamnies.forEach(el => {
        const companyName = el[0];
        const allIds = el[1];
        console.log(companyName);
        let uniqueIDs = new Set(allIds);

        for (const id of uniqueIDs) {
            console.log(` -- ${id}`);
            
        }

        
    });
}
companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 
'Microsoft -> CC12345', 'HP -> BB12345' ])