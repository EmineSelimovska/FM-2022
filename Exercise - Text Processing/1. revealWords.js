function revealWords(word,text) {
    let words = word.split(', ');
    
    let result = `${text} `;
    let censore = '*';
    words.forEach(word => {
        const rep = ` ${censore.repeat(word.length)} `;
            result = result.replace(rep, ` ${word} `);
    });
        
        

       
    
   console.log(result);

   
    
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages' )