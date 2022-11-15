function schoolGrades(input) {
    let map = new Map();
   

    for (const line of input) {
        let studets = line.split(' ');
        let nameStudent = studets.shift();
        let grade = studets.map(Number)
       
        if(!map.has(nameStudent)){
           map.set(nameStudent,[])
           }
           for (const line of grade) {
            map.get(nameStudent).push(line);
           }
            
        }
       let sorted= Array.from (map.entries()).sort((kvpA,kvpB) => 
    kvpA[0].localeCompare(kvpB[0]))

    function avgGrades(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }
   
    for (let line of sorted){
        
        console.log(`${line[0]}: ${avgGrades(line[1]).toFixed(2)}`);
    }
 }
    
    
schoolGrades(['Lilly 4 6 6 5','Tim 5 6',
'Tammy 2 4 3','Tim 6 6'])
