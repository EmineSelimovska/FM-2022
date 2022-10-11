function maxSequenceOfequalElements(arr) {
    let longerElements = [];
    let leftIndex = 0;
    for(let i = 0; i < arr.length; i++){
        let currentEl = Number(arr[i]);
        let curentSequence = [currentEl];
        for (let j = i + 1; j < arr.length; j++){
            let nextEl = Number(arr[j]);
            if (nextEl === currentEl){
                curentSequence.push(nextEl)

            }else{
                break;
            }
        }
        if(curentSequence.length > longerElements.length){
            longerElements = [];
            for(let j = 0; j < curentSequence.length; j++){
                longerElements.push(curentSequence[j]);
            }
        }else if (curentSequence.length === longerElements.length){
            if(i < leftIndex){
                leftIndex = i;
            }
        }

    }
    console.log(longerElements.join(' '));
}
maxSequenceOfequalElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])