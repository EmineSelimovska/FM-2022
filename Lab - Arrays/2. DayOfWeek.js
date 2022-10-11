function dayOfWeek(number) {
    let day = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]
    if(number >= 1 && number <= 7){
        console.log(day[number - 1]);
    }else {
        
        console.log("Invalid day!");
    }
}
dayOfWeek(3)