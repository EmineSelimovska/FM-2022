function reverseAnArrayOfNumbers(n,inputArr) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = inputArr[i];
        
    }
    for (let i = 0; i < n; i++){
        arr[n - 1 - i] = inputArr[i]

    }
    console.log(arr.join(' '));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])