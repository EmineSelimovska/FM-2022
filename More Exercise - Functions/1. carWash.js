function carWash(command) {
    let cleane  = 0;
    let soap = x => x + 10;

  let water = x => x + x * 0.2;

  let vacuum = x => x + x * 0.25;

  let mud = x => x - x * 0.10;
    for (let i = 0; i < command.length; i++) {
        let cound = command[i]
        if (cound === 'soap'){
            cleane = soap(cleane);
        } else if (cound === 'water'){
            cleane = water(cleane);
        }else if (cound === 'vacuum cleaner'){
            cleane = vacuum(cleane);
        }else if (cound === 'mud'){
            cleane = mud(cleane);
        }

        
        
    }

  console.log(`The car is ${cleane.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap',
'water'] )