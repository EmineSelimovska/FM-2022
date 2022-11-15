function partyTime(input) {
    let vipGuests = [];
    let regularGuest = [];
    let guest = input.shift();

    while(guest !== 'PARTY'){
       const isVip = !isNaN(guest[0]);
       if(isVip){
        vipGuests.push(guest);
       }else{
        regularGuest.push(guest);
       }
       guest = input.shift();
    }
    let fullGuest = vipGuests.concat(regularGuest);
    for (const guest of input) {
        fullGuest.splice(fullGuest.indexOf(guest),1);
        
    }
    console.log(fullGuest.length);
    fullGuest.forEach(guest => console.log(guest));
        
    

}
partyTime([
'7IK9Yo0h','9NoBUajQ','Ce8vwPmE', 
'SVQXQCbc', 'tSzE5t0p','PARTY', '9NoBUajQ',
'Ce8vwPmE', 'SVQXQCbc' 
])