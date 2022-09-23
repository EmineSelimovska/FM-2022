function newDate(years,month,day) {
    let nextDay = new Date(years, month - 1, day + 1);
    let newYear = nextDay.getFullYear();
    let newMonth = nextDay.getMonth() + 1;
    let newDate = nextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);

}
newDate(2016, 9, 30)