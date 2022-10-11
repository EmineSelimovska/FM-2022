function charactersInRange(charOne,charTwo) {
    let first = Math.min(charOne.charCodeAt(),charTwo.charCodeAt());
    let second = Math.max(charOne.charCodeAt(),charTwo.charCodeAt());
    let char = '';
    for(let i = first + 1; i < second; i++){
         char += String.fromCharCode(i) + ' ';
        
        
        }
        console.log(char);
    }
    
charactersInRange('C',

'#')