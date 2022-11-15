function aMinerTask(input) {

    let task = {};

    for(let i = 0; i < input.length; i+=2){
     let name = input[i];
     let quantity = Number(input[i + 1]);
     
     if(!task.hasOwnProperty(name)){
        task[name] = 0;
     }
     task[name] += quantity;
    }
  
    for (const key in task) {
    console.log(`${key} -> ${task[key]} `);
   }

   
}
aMinerTask([

    'Gold',
    
    '155',
    
    'Silver',
    
    '10',
    
    'Copper',
    
    '17'
    
    ])