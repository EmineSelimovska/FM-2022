function rotate(arr) {
    let countRotate = arr.pop();
    let current = countRotate % arr.length;
    
    for(let i = 0; i < current; i++){
        arr.unshift(arr.pop());
        
  }
    console.log(arr.join(' '));
}

rotate(['Banana', 'Orange', 'Coconut',

'Apple', '15'] )