function gladiatorExpenses(fights,helmetpPrice,swordPrice,shieldPrice,armorPrice) {
    let sum = 0
    let brokenShield = 0;
    for(let i = 1; i <= fights; i++){
        if (i % 2 == 0){
            sum += helmetpPrice;

        }
        if (i % 3 == 0){
            sum += swordPrice;
            
        }
        if (i % 2 == 0 && i % 3 == 0){
            sum += shieldPrice;
            brokenShield++;
            if (brokenShield % 2 == 0){
                sum += armorPrice;
            }
        }
        

    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
gladiatorExpenses(7,2,3,4,5)