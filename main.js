/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
let audioPlayer = document.querySelector(".music-player");
let form = document.querySelector(".search-form");
let results = document.querySelector(".results")

// 2. Create your `onSubmit` event for getting the user's search term
form.onsubmit = function onSubmit() {
  // console.log(form.search.value);
  event.preventDefault();
  searchSoundCloud(form.search.value);
  // searchSoundCloudArtist(form.search.value);
};

// 3. Create your `fetch` request that is called after a submission
function searchSoundCloud(song) {
  fetch("http://api.soundcloud.com/tracks/?client_id=8538a1744a7fdaa59981232897501e04&q=" + song)
  .then(function(response) {
    response.json().then(function(data) {
      results.innerHTML = "";
      // console.log(data);
      musicInput(data);
    });
  });
}
function searchSoundCloudArtist(artist) {
  fetch("http://api.soundcloud.com/users/3207?client_id=8538a1744a7fdaa59981232897501e04&q=" + artist)
  .then(function(response) {
    response.json().then(function(data) {
      // console.log(data);
      musicInput(data);
    });
  });
}


// 4. Create a way to append the fetch results to your page
function musicInput(data) {
  console.log(data[0]);
  for (var i = 0; i < data.length; i++) {
    // data[i].title;

  let text = '<div class="box"><div class="pic"><img src="link"></div><div class="">'+data[i].artist+'</div><div class="">'+data[i].title+'</div></div>';
  results.insertAdjacentHTML("beforeend", text);
  }
}

// 5. Create a way to listen for a click that will play the song in the audio play




// fetch("http://api.soundcloud.com/users/3207?client_id=8538a1744a7fdaa59981232897501e04&q=" + artist)
