function Song(title, artist){
    this.title = title;
    this.artist = artist;
}

Song.prototype.play = function(){
    console.log(`Playing: ${this.title} - ${this.artist}`);
}


const song1 = new Song("Havana", "Camila Cabello");
const song2 = new Song("Perfect", "Ed Sheeran");
const song3 = new Song("บักคนซั่ว", "ทิดแอม");

song1.play();
song2.play();
song3.play();