function addAndRemove(command) {
    let initialNumber = 0;
    let arr = [];
    for(let i = 0;i < command.length; i++){
        let command1 = command[i];
        initialNumber++;
        if(command1 === 'add'){
            arr.push(initialNumber);
        }else if (command1 === 'remove'){
            
            arr.pop(initialNumber);

        }
          
        
        

    }  
    if(!arr.length){
        console.log('Empty');
    }else{
        console.log(arr.join(' '));
    }
   
    
}
addAndRemove(['add', 'add', 'add', 'add'] )