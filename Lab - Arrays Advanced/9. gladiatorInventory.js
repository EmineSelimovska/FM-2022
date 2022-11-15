function gladiatorInventory(arr) {
    let inventory = arr.shift();
    let inventoryArr = inventory.split(' ');

    for(let i = 0; i < arr.length; i++){
        let commandLine = arr[i].split(' ');
        let command = commandLine[0];
        let equipment = commandLine[1];
        

        if(command === 'Buy'){
            if(!inventoryArr.includes(equipment)){
                inventoryArr.push(equipment);
            }
        }else if(command === 'Trash'){
            if(inventoryArr.includes(equipment)){
                let index = inventoryArr.indexOf(equipment);
                inventoryArr.splice(index,1);
            }
        }else if(command === 'Repair'){
            if(inventoryArr.includes(equipment)){
                let rapairIndex = inventoryArr.indexOf(equipment);
                inventoryArr.splice(rapairIndex,1);
                inventoryArr.push(equipment);
            }
        }else if(command === 'Upgrade'){
           let upgradeIndex = equipment.split('-');
                if(inventoryArr.includes(upgradeIndex[0])){
                    let upgrade = inventoryArr.indexOf(upgradeIndex[0]);
                    inventoryArr.splice(upgrade + 1,0,`${upgradeIndex[0]}:${upgradeIndex[1]}`);
                   
                }
              
               
                }
            
        }

    
    console.log(inventoryArr.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',

'Buy Bag',

'Trash Shield',

'Repair Spear',

'Upgrade SWORD-Steel'])