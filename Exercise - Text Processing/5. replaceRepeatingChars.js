function replaceRepeatingChars(input) {
    let chars = input.split('');
    let firstChar = chars[0];

    for (let i = 1; i < chars.length; i++) {
        let current = chars[i];
        let per = chars[i - 1]
        if(current !== per){
            firstChar += current;
        }
    }
    console.log(firstChar);
}
replaceRepeatingChars('qqqwerqwecccwd');