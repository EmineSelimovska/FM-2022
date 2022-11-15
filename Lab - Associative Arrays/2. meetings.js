function meetings(input) {
    let meet = {};

     for (const line of input) {
        let [day,name] = line.split(' ');
        if(meet[day]){
            console.log(`Conflict on ${day}!`);
        }else{
            meet[day] = name;
            console.log(`Scheduled for ${day}`);
        }
        
    }
    
    for(let [day,name] of Object.entries(meet)){
        console.log(`${day} -> ${name}`);
    }
    
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'] )