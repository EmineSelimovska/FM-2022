function wordsTracker(input) {
    const words = input.shift().split(' ');
    let rezult = {};

    for(let word of words){
        rezult[word] = 0;
    }

    for (const word of input) {
        if(rezult.hasOwnProperty(word)){
            rezult[word]++;
        }
        
    }
    let sorted = Object.entries(rezult).sort((a,b) => b[1] - a[1]);

    for (const word of sorted) {
        console.log(`${word[0]} - ${word[1]}`);
        
    }

}
        
wordsTracker([ 'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task' ])