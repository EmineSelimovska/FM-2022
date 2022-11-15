function arrayManipulations(command) {
    let arr = command
    .shift()
    .split(' ')
    .map(Number);
    for(let i = 0; i < command.length;i++){
        let [commands,firstNumber,secondNumber] = command[i].split(' ');
        
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);

        switch (commands){
            case 'Add':  add(firstNumber);
                break;
            case 'Remove':remove(firstNumber);
                break;
            case 'RemoveAt': removeAt(firstNumber); 
                break;
            case 'Insert': insert(firstNumber,secondNumber); 
                break;
        }
        
    }
   
    function add(el) {
        arr.push(el)
        
    }
    function remove(num) {
        arr = arr.filter(el  => el != num);
        
    }
    function removeAt(index) {
        arr.splice(index,1);
        
    }
    function insert(num,index) {
        arr.splice(index,0,num);
        
    }
     console.log(arr.join(' '));

}
arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])