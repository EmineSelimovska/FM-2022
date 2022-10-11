function centuriesToMinutes(number) {
    let years = number * 100;
    let days = Math.trunc(years  * 365.2422);
    let hours = 24 * days;
    let min = 60 * hours;
    console.log(`${number} centuries = ${years} years = ${days} days = ${hours} hours = ${min} minutes`);
    
}
centuriesToMinutes(1)