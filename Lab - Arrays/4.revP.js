function reverseInPlace(chars) {
    let arr = [];
    for (let i = 0; i < chars.length ; i++){
        
        arr[i]= chars[chars.length - 1 - i];

    }
    console.log(arr.join(' '));
}
reverseInPlace(['abc', 'def', 'hig',

'klm', 'nop'])