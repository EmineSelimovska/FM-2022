function gramophone(bandName,albumName,songName) {
    let time = (bandName.length * albumName.length * songName.length) / 2;

    let rotated = Math.ceil(time/2.5);
    console.log(`The plate was rotated ${rotated} times.`);
}
gramophone('Black Sabbath', 'Paranoid','War Pigs')