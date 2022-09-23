function leapYear(year) {
    let isLeapYears = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    if (isLeapYears){
        console.log("yes");
    }else{
        console.log("no");
    }
}
leapYear(1984)