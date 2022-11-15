function pascalCaseSplitter(input) {
    let char = input[0];
    let lower = input.toLowerCase();
    for(let i = 1;i < input.length;i++){
        let chars = input[i]
        if(lower[i] !== chars){
            char += ', ';

        }
            char += chars
        
      
        
    }
    console.log(char);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')