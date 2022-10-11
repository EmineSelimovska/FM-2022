function requiredReading(numberOfPages,pagesIn1Hours,numberOfDay) {
    let totalTime = numberOfPages/pagesIn1Hours;
    let hours = totalTime/numberOfDay;
    console.log(hours);
}
requiredReading(212, 20 ,2);