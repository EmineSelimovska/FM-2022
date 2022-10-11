function matrix(number) {
    let rowGenerators = () => {
        let singlerRow = '';
        for(let i = 1; i <= number; i++){
            singlerRow += `${number} `
        }
        return singlerRow;
    };
    for(let j = 1; j <= number; j++){
        console.log(rowGenerators());
    }
    
}
matrix(3)