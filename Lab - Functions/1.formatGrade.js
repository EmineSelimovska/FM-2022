function formatGrade(grade) {
    let formatGrade = 0;
    if (grade < 3.00){
        grade = 2;
         formatGrade = 'Fail';
    }else if(grade < 3.50){
        formatGrade = 'Poor';
    }else if(grade < 4.50){
        formatGrade = 'Good';
    }else if(grade < 5.50){
        formatGrade = 'Very good';
    }else{
        formatGrade = 'Excellent';
    }

    if (grade < 3.00){
        console.log(`${formatGrade} (${grade})`);
     }else{
        console.log(`${formatGrade} (${grade.toFixed(2)})`);
     }
}
formatGrade(4.50)