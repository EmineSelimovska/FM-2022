function censoredWords(text,word) {
    let result = text;
    let censore = '*';
    
    while(result.includes(word)){
        result = result.replace(word, censore.repeat(word.length));
    }
    console.log(result);
}
censoredWords('A small sentence with some words','small')