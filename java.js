var musicHistory = (function () {

// var elAddMusic = document.getElementById("elAddMusic");
var $elAddMusic = $("#elAddMusic");

// var elDeleteMusic = document.getElementsByClassName("deleteButton");
var $elDeleteMusic = $(".deleteButton");

var $listSongs = $('#listSongs') ;

function deleteItem() {
  var elToDelete = event.target.closest("div");
  var idToDelete = elToDelete.id.split("--")[1];
  songData.splice(idToDelete, 1);
  songPrinter();
};

var $addArtist = $("#addArtist");

var $addArtistButton= $("#addArtistButton");

$addArtistButton.click(classTrigger);

document.getElementById("newAlbum").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        $addArtistButton.click();
    }
});

$elAddMusic.click(classTrigger);

var songData = {};

$addArtistButton.click(addNewArtist);

function addNewArtist() {
  var $artist = $("#newArtist");
  var $song = $("#newSong");
  var $album = $("#newAlbum");

  var newObj = { "Song": $song.val(), "Artist": $artist.val(), "Album": $album.val()}

  songData.unshift(newObj);

  songPrinter();

  console.log(songData);

};

var $elArtistSelect = $("#artistSelect");
var $elListSongs = $("#listSongs");

function classTrigger() {
  $addArtist.toggleClass("visibility");
  $elArtistSelect.toggleClass("visibility");
  $elListSongs.toggleClass("visibility");
};


function songPrinter() {
  var newHTML = "";
  for (var x in songData) {
  newHTML += `<div id=song--${x}> <h3> ${songData[x].Song} </h3><p> ${songData[x].Artist} | ${songData[x].Album}</p><input type="button" class="deleteButton" value="DESTROY"></div>`
  }


 $listSongs.html(newHTML);
 // addEventListeners();
  $(".deleteButton").click(deleteItem);

 console.log("$elDeleteMusic", $(".deleteButton").length);
}


function executeThisCodeAfterFileIsLoaded(responseText) {
  songData = responseText;
  
  songPrinter();
}


var myRequest = $.ajax("json.json")
      .done(executeThisCodeAfterFileIsLoaded)
      .fail(function() {
        alert("jqhxr request failed to load");
      })
      // .always(function() {
      //   });

var $moreButton = $("#moreButton");

$moreButton.click(addMoreSongs);

function addMoreSongs() {
    $.ajax("json2.json")
      .done(addNewMusic)
      .fail(function() {
        alert("jqhxr request failed to load");
      })
      // .always(function() {
      //   });
};


function addNewMusic(responseText) {
  var newSongData = responseText;
  newSongData.forEach(function(object){
    songData.unshift(object);
    songPrinter();
  });
  }



})();

