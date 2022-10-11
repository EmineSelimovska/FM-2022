function arrayRotation(arayRotate,rotation) {
    let currentArr = 0;
    let countRot = rotation % arayRotate.length
    for(let i = 0; i < countRot; i++){
        currentArr = arayRotate.shift();
        arayRotate.push(currentArr);


    }
    console.log(arayRotate.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)