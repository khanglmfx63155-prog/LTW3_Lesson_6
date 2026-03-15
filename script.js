import { ShortFilm } from "./shortfilm.js";
import { LongFilm } from "./longfilm.js";
import { Song } from "./song.js";

let mediaArray = [
  new ShortFilm("Avengers", "./asset/avengers.jpg", 9, 143),

  new LongFilm("Naruto", "./asset/naruto.jpeg", 9, "long", 220),

  new LongFilm("One Piece", "./asset/onepiece.jpg", 10, "long", 1000),

  new ShortFilm("Interstellar", "./asset/interstellar.jpg", 9, 169),

  new Song(
    "Có đâu ai ngờ",
    "./asset/codauaingobg.jpg",
    8,
    "./media/codauaingo.mp3",
  ),

  new Song("Đom Đóm", "./asset/domdombg.jpg", 4, "./media/domdom.mp3"),

  new Song(
    "Đường tôi chở em về",
    "./asset/duongtoichoemvebg.jpg",
    10,
    "./media/duongtoichoemve.mp3",
  ),

  new Song("Em Mây", "./asset/emmaybg.jpg", 10, "./media/emmay.mp3"),
];

function showMedia(arr) {
  let mediaLS = document.getElementById("media-ls");

  mediaLS.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i].createItem();

    mediaLS.appendChild(item);
  }
}

window.onload = function () {
  showMedia(mediaArray);
};

function searchMedia() {
  let name = document.getElementById("searchName").value.toLowerCase();
  console.log("name" + " : " + name);
  let type = document.getElementById("searchType").value;
  console.log("type" + " : " + type);
  let rating = document.getElementById("searchRating").value;
  console.log("rating" + " : " + rating);

  let result = mediaArray.filter(function (media) {
    let matchName = media.name.toLowerCase().includes(name);
    console.log("media.name.toLowerCase()" + " : " + media.name.toLowerCase());
    console.log("name" + " : " + name);
    console.log("matchName" + " : " + matchName);
    let matchType = true;

    if (type !== "all") {
      matchType = media.type === type;
      console.log("media" + " : " + JSON.stringify(media));
      console.log("media.type" + " : " + media.type);
      console.log("matchType" + " : " + matchType);
    }

    let matchRating = true;

    if (rating !== "all") {
      matchRating = media.rating == rating;
<<<<<<< HEAD
      console.log("matchRating" + " : " + matchRating);
=======
      console.log(matchRati/ng);
>>>>>>> b9143b499a8ac2d1a811b26a39206bacef198786
    }

    return matchName && matchType && matchRating;
  });

  if (result.length === 0) {
    alert("Không có kết quả phù hợp");
  }

  showMedia(result);
}

document.getElementById("searchBtn").addEventListener("click", searchMedia);
