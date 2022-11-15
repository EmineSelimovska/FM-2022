function employees(list) {
    let name = {};
    for(let i = 0; i < list.length; i++){
       let person = list[i];
       name[person] = person.length;
    }
    for (const person in name) {
        console.log(`Name: ${person} -- Personal Number: ${name[person]}`);
      
    }
    
  


}
employees(['Silas Butler','Adnaan Buckley','Juan Peterson',
'Brendan Villarreal' ])