function race(raceDistance) {
    let raceName = raceDistance.shift().split(', ');
    let raceObject = {};
    let patternName = /[A-Za-z]+/g;
    let patternDistance = /[0-9]+/g;
    let current = raceDistance.shift();

    while(current !== 'end of race'){
        let nameRace = current.match(patternName).join('');
        let distanceRace = current.match(patternDistance).join('');

        if(raceName.includes(nameRace)){
            let distance = 0;
           
            for (const digit of distanceRace) {
                distance += Number(digit);
                
            }
            if(!raceObject.hasOwnProperty(nameRace)){
                raceObject[nameRace] = distance;
            }else{
                raceObject[nameRace] += distance;
            }
        }
       
     current = raceDistance.shift();
    }
    let sorted = Object.entries(raceObject).sort((a,b) => b[1] - a[1])

    let firstPlace = sorted[0][0];
    let secondPlace = sorted[1][0];
    let thirdPlace = sorted[2][0];

    console.log(`1st place: ${firstPlace}`);
    console.log(`2nd place: ${secondPlace}`);
    console.log(`3rd place: ${thirdPlace}`);


}
race(['George, Peter, Bill, Tom',

'G4e@55or%6g6!68e!!@ ',

'R1@!3a$y4456@',

'B5@i@#123ll',

'G@e54o$r6ge#',

'7P%et^#e5346r',

'T$o553m&6',

'end of race'])