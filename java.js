

var elAddMusic = document.getElementById("elAddMusic");

var elDeleteMusic = document.getElementsByClassName("deleteButton");

function addEventListeners() {
for (var i = 0; i< elDeleteMusic.length; i++) {
  elDeleteMusic[i].addEventListener("click", deleteItem)
}
}

function deleteItem() {
  var elToDelete = event.target.closest("div");
  var idToDelete = elToDelete.id.split("--")[1];
  songData.splice(idToDelete, 1);
  songPrinter();
};

var addArtist = document.getElementById("addArtist");

var addArtistButton= document.getElementById("addArtistButton");

addArtistButton.addEventListener("click", classTrigger);

document.getElementById("newAlbum").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        addArtistButton.click();
    }
});

elAddMusic.addEventListener("click", classTrigger);

var songData = {};

addArtistButton.addEventListener("click", addNewArtist);

function addNewArtist() {
  var artist = document.getElementById("newArtist");
  var song = document.getElementById("newSong");
  var album = document.getElementById("newAlbum");

  var newObj = { "Song": song.value, "Artist": artist.value, "Album": album.value}

  songData.unshift(newObj);

  songPrinter();

  console.log(songData);
};

var elArtistSelect = document.getElementById("artistSelect");
var elListSongs = document.getElementById("listSongs");

function classTrigger() {
  addArtist.classList.toggle("visibility");
  elArtistSelect.classList.toggle("visibility");
  elListSongs.classList.toggle("visibility");
};


function songPrinter() {
  var newHTML = "";
  for (var x in songData) {
  newHTML += `<div id=song--${x}> <h3> ${songData[x].Song} </h3><p> ${songData[x].Artist} | ${songData[x].Album}</p><input type="button" class="deleteButton" value="DESTROY"></div>`
  }
 listSongs.innerHTML = newHTML;
 addEventListeners();
}


function executeThisCodeAfterFileIsLoaded() {
  songData = JSON.parse(event.target.responseText);
  var listSongs = document.getElementById("listSongs")
  
  songPrinter();
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.open("GET", "json.json");
myRequest.send();


var moreButton = document.getElementById("moreButton");

moreButton.addEventListener("click", addMoreSongs);

function addMoreSongs() {
  var myRequest = new XMLHttpRequest();
  myRequest.open("GET", "json2.json");
  myRequest.send();
  myRequest.addEventListener("load", addNewMusic);
};

function addNewMusic() {
  var newSongData = JSON.parse(event.target.responseText);
  newSongData.forEach(function(object){
    songData.unshift(object);
    songPrinter();
  });
  }


// var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// songs.unshift("Purple Rain - by Prince on the album Purple Rain");

// songs[songs.length] = "Let's Go Crazy - by Prince on the album Purple Rain";

// var x = songs.toString();

// console.log("x", x);

// for (var x in songs) {
//   songs[x] = songs[x].replace(/\>/g, '-');
//   songs[x] = songs[x].replace(/\*/g, "");
//   songs[x] = songs[x].replace(/\(/g, "");
//   songs[x] = songs[x].replace(/\!/g, "");
//   songs[x] = songs[x].replace(/\@/g, "");
//  }

// var songName= [];
// var artistName = []
// var albumName = [];

// function songWriter() {
//   for (var x in songs) {
//     var textSearch = songs[x];
//     var textHolder = "";
//     for (i=0; i<textSearch.length; i++) {
//      if (textSearch[i] === "-") { 
//       songName[x] = textHolder;
//       break; }
//     textHolder += textSearch[i];
//     }
// }
// }

// songWriter();

// function artistFinder () {
//   for (var x in songs) {
//     var textSearch = songs[x];
//     var textHolder = "";
//     var n = textSearch.indexOf("- by") + 5;
//     var o = textSearch.indexOf(" on")
//     textHolder = textSearch.slice(n, o);
//     artistName[x] = textHolder;
// }
// }

// artistFinder();

// function albumFinder () {
//   for (var x in songs) {
//     var textSearch = songs[x];
//     var textHolder = "";
//     var n = textSearch.indexOf("album") + 6;
//     var o = textSearch.length;
//     textHolder = textSearch.slice(n, o);
//     albumName[x] = textHolder;
// }
// }

// albumFinder();

// console.log("albumName", albumName);

// console.log("songName", songName);

// console.log("artistName", artistName);

// console.log(songs);

// function replaceHTML() {
//   var listSongs = document.getElementById("listSongs")
//   var newHTML = "";
//   for (var x in songs) {
//   newHTML += `<h3> ${songName[x]} </h3><p> ${artistName[x]} | ${albumName[x]}</p>`
// }
//  listSongs.innerHTML = newHTML;
// }

// replaceHTML();




