let card1 = document.querySelector(".card1");


function playmusic(){
    let songs = document.querySelector(".songs");
    console.log(songs.innerHTML);
    console.log("print the songs");
}

card1.addEventListener("click", playmusic)
