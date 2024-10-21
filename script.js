
// songs fetching
let songs;
let currentSong = new Audio();
function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "";
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}



async function getSongs() {
        const response = await fetch("http://localhost:3000");
        const songs = await response.json();

        const songUrl = songs.map((song) => `http://localhost:3000/songs/${song}`);
        console.log(songUrl,typeof songUrl )
        return songUrl;
}



const playMusic = (track) => {
    currentSong.src = track;
    currentSong.play();
    play.src = "pause.svg";
    let songName = track
      .split("/songs/")[1]
      .replace(/\(.*?\)/g, "")
      .replace(/[^a-zA-Z.\s]/g, " ")
      .replace(/\.com|\.sb/g, "")
      .replace(/\d+/g, "")
      .replace(".mp", "")
      .replace("Kbps", "")
      .replace(".", "")
      .replace(/\s+/g, " ")
      .trim();
  
    document.querySelector(".songInfo").innerHTML = songName;
  };
  
  async function main() {
    songs = await getSongs();
    playMusic(songs[0]);
    play.src = "play.svg";
    let songUl = document
      .querySelector(".songList")
      .getElementsByTagName("ul")[0];
    songUl.innerHTML = "";
  
    for (let song of songs) {
      let songTitle = song
        .split("/songs/")[1]
        .replace(/\(.*?\)/g, "")
        .replace(/[^a-zA-Z.\s]/g, " ")
        .replace(/\.com|\.sb/g, "")
        .replace(/\d+/g, "")
        .replace(".mp", "")
        .replace("Kbps", "")
        .replace(".", "")
        .replace(/\s+/g, " ")
        .trim();
      let li = document.createElement("li");
      li.innerHTML = `
      <img class="invert" src="music.svg" alt="">
      <div class="info">
        <div>${songTitle}</div>
      </div>
      <div class="playNow">
        <span>Play now</span>
        <img class="invert" src="play.svg" alt="">
      </div>`;
  
      li.addEventListener("click", () => {
        playMusic(song);
      });
      songUl.appendChild(li);
    }
  
    // Attach an event listner to play, previous and next button
    play.addEventListener("click", () => {
      if (currentSong.paused) {
        currentSong.play();
        play.src = "pause.svg";
      } else {
        currentSong.pause();
        play.src = "play.svg";
      }
    });
  
    currentSong.addEventListener("timeupdate", () => {
      document.querySelector(
        ".songCurrent"
      ).innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}`;
      document.querySelector(
        ".songDuration"
      ).innerHTML = `${secondsToMinutesSeconds(currentSong.duration)}`;
      document.querySelector(".circle").style.left =
        (currentSong.currentTime / currentSong.duration) * 99 + "%";
    });
  
    // add an event listner to seekbar
    document.querySelector(".seekBar").addEventListener("click", (e) => {
      let persent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
      document.querySelector(".circle").style.left = persent + "%";
      currentSong.currentTime = (currentSong.duration * persent) / 100;
    });
  
    document.querySelector(".hamburger").addEventListener("click", () => {
      document.querySelector(".left").style.left = "0";
    });
  
    document.querySelector(".close").addEventListener("click", () => {
      document.querySelector(".left").style.left = "-150%";
    });
  
    // add and event listner to previous and next
  
    // Add an event listener to previous
    previous.addEventListener("click", () => {
      currentSong.pause();
  
      let index = songs.indexOf(currentSong.src);
      if (index > 0) {
        playMusic(songs[index - 1]);
      }
    });
  
    // Add an event listener to next
    next.addEventListener("click", () => {
      currentSong.pause();
  
      let index = songs.indexOf(currentSong.src);
      if (index < songs.length - 1) {
        playMusic(songs[index + 1]);
      }
    });
  
    currentSong.addEventListener("ended", () => {
      let index = songs.indexOf(currentSong.src);
      if (index < songs.length - 1) {
        playMusic(songs[index + 1]);
      } else {
        play.src = "play.svg";
      }
    });
  
    // add event listner to volume
    document.querySelector(".range").getElementsByTagName("input")[0].value = 60;
    currentSong.volume = 0.6;
    document
      .querySelector(".range")
      .getElementsByTagName("input")[0]
      .addEventListener("change", (e) => {
        // console.log(e.target.value)
        currentSong.volume = parseInt(e.target.value) / 100;
        if (currentSong.volume === 0) {
          document.querySelector(".volume>img").src = "mute.svg";
        } else {
          document.querySelector(".volume>img").src = "volume.svg";
        }
      });
  
    document.querySelector(".volume>img").addEventListener("click", () => {
      const volumeImg = document.querySelector(".volume>img");
      const volumeSrc = volumeImg.src;
  
      if (volumeSrc.includes("volume.svg")) {
        volumeImg.src = "mute.svg";
        currentSong.volume = 0; // Mute the song
      } else if (volumeSrc.includes("mute.svg")) {
        volumeImg.src = "volume.svg";
        currentSong.volume = 0.5;
        document
          .querySelector(".range")
          .getElementsByTagName("input")[0].value = 50;
      }
    });
  
    const card = document.querySelectorAll(".card");
    card[0].addEventListener("click", () => {
      playMusic(songs[51]);
    });
  
    card[1].addEventListener("click", () => {
      playMusic(songs[27]);
    });
  }
  
  main();
  
  
  
  




