

function executeThisCodeAfterFileIsLoaded() {
  var data = JSON.parse(event.target.responseText);
  var listSongs = document.getElementById("listSongs")
  var newHTML = "";
  for (var x in data) {
  newHTML += `<h3> ${data[x].Song} </h3><p> ${data[x].Artist} | ${data[x].Album}</p>`
  }
 listSongs.innerHTML = newHTML;
}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
// myRequest.addEventListener('load', function(){
//   console.log("HEY Listen");
// });

// myRequest.addEventListener("error", executeThisIfXHRFails);

myRequest.open("GET", "json.json");

myRequest.send();




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




