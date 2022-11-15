function oddOccurrences(input) {
    let result = {};
    let arr = input.split(' ').map(el => el.toLowerCase());
    

    for (const word of arr) {
        if(result[word] == undefined){
            result[word] = 1;
        }else{
            result[word]++;
        }
       
        }
    let finallResult = '';
    for (const word of arr) {
        if(result[word] % 2 === 1){
            finallResult += `${word} `;
            delete result[word];

        }
        
    }

    console.log(finallResult);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')