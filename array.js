
// songs fetching
let songs;
let currentSong = new Audio();
function secondsToMinutesSeconds(seconds){
  if(isNaN(seconds) || seconds < 0){
    return"";
  }
  const minutes =  Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60)

  const formattedMinutes = String(minutes).padStart(2,'0')
  const formattedSeconds = String(remainingSeconds).padStart(2,'0')
  return `${formattedMinutes}:${formattedSeconds}`

}

async function getSongs() {
  let songs = [
    "https://playermusk.netlify.app/songs/_Tu%20Hai%20Kahan_320(PagalWorld.com.sb).mp3",
    "https://playermusk.netlify.app/songs/(48)%20Kaho%20Na%20Pyaar%20Hai%20.mp3",
    "https://playermusk.netlify.app/songs/(50)%20Aashiyan.mp3",
    "https://playermusk.netlify.app/songs/01%20Zara%20Sa.mp3",
    "https://playermusk.netlify.app/songs/02%20Labon%20Ko.mp3",
    "https://playermusk.netlify.app/songs/Aaram%20Aata%20Hai%20-(DJMaza).mp3",
    "https://playermusk.netlify.app/songs/Ae%20Dil%20Hai%20Mushkil%20_320(PagalWorld.com.).mp3",
    "https://playermusk.netlify.app/songs/Apnaa%20Mujhe%20Tu%20Lagaa-(PagalSongs.Com.IN)%20copy.mp3",
    "https://playermusk.netlify.app/songs/Baarishein_320(PagalWorld.com.).mp3",
    "https://playermusk.netlify.app/songs/Baarishon%20Mein_320(PagalWorld.com.sb).mp3",
    "https://playermusk.netlify.app/songs/Bekhayali%20-(PagalWorld.Ink).mp3",
    "https://playermusk.netlify.app/songs/Bewafa-Nikli-Hai-Tu_320(PaglaSongs).mp3",
    "https://playermusk.netlify.app/songs/Bol%20Do%20Na%20Zara.mp3",
    "https://playermusk.netlify.app/songs/Chal%20Diye%20Tum%20Kahan.mp3",
    "https://playermusk.netlify.app/songs/Chale%20Aana%20-(PagalWorld.Ink).mp3",
    "https://playermusk.netlify.app/songs/Chaleya_320(PagalWorld.com.se).mp3",
    "https://playermusk.netlify.app/songs/Choo%20Lo%20%20320%20Kbps.mp3",
    "https://playermusk.netlify.app/songs/Dil%20Ibaadat_320(PagalWorld.com.se).mp3",
    "https://playermusk.netlify.app/songs/Dil%20Sambhal%20Ja%20Zara_320).mp3",
    "https://playermusk.netlify.app/songs/Ha%20Hasi%20Ban%20Gaye-(PagalWorld.Ink).mp3",
    "https://playermusk.netlify.app/songs/Hai%20Dil%20Ye%20Mera%20%20320%20Kbps.mp3",
    "https://playermusk.netlify.app/songs/Hale%20Dil%20%20320%20Kbps.mp3",
    "https://playermusk.netlify.app/songs/Har%20Kisi%20Ko%20Nahi%20Milta_320(PagalWorld.com.so).mp3",
    "https://playermusk.netlify.app/songs/Hua%20Hain%20Aaj%20Pehli%20Baar%20-(PagalWorld.Ink).mp3",
    "https://playermusk.netlify.app/songs/Husn_320(PagalWorld.com.sb).mp3",
    "https://playermusk.netlify.app/songs/Ijazat%20320(PagalWorld.com.sb).mp3",
    "https://playermusk.netlify.app/songs/ik%20jalakh%20ko%20teri.mp3",
    "https://playermusk.netlify.app/songs/Ishq%20Wala%20Love%20%20320%20Kbps.mp3",
    "https://playermusk.netlify.app/songs/Jaan%20Nisaar%20(2018).mp3",
    "https://playermusk.netlify.app/songs/Jaavedaan%20Hai.mp3",
    "https://playermusk.netlify.app/songs/Jab-Bhi-Teri-Yaad-Aayegi_320(PaglaSongs).mp3",
    "https://playermusk.netlify.app/songs/Janam%20Janam320%20Kbps.mp3",
    "https://playermusk.netlify.app/songs/Kahani-Suno-2.0.mp3",
    "https://playermusk.netlify.app/songs/Kaise-Hua-.mp3",
    "https://playermusk.netlify.app/songs/Kaisi%20Hai%20Lagdi%20Kamaal%20-(PagalSongs.Com.IN).mp3",
    "https://playermusk.netlify.app/songs/Khamoshiyan%20(PagalWorld.Ink).mp3",
    "https://playermusk.netlify.app/songs/Kuch%20To%20Hai%20%20320Kbps.mp3",
    "https://playermusk.netlify.app/songs/Kun%20Faaya%20Kun%20320%20Kbps.mp3",
    "https://playermusk.netlify.app/songs/Lo%20Maan%20Liya_320(PagalWorld.com.se).mp3",
    "https://playermusk.netlify.app/songs/Main%20Dhoondne%20Ko%20-(PagalWorld.Ink).mp3",
    "https://playermusk.netlify.app/songs/Maine%20Royaan_320(PagalWorld.com.se).mp3",
    "https://playermusk.netlify.app/songs/Maine%20Tera%20Naam%20Dil%20Rakh%20Diya_320(PagalWorld.com.se).mp3",
    "https://playermusk.netlify.app/songs/Mann%20Mera%20%20320%20Kbps.mp3",
    "https://playermusk.netlify.app/songs/Mareez%20E%20Ishq%20320%20Kbps.mp3",
    "https://playermusk.netlify.app/songs/Mat%20Aazma%20Re.mp3",
    "https://playermusk.netlify.app/songs/Mehrama%20%20320%20Kbps.mp3",
    "https://playermusk.netlify.app/songs/Mera%20Pehla%20Pehla%20Pyaar.mp3",
    "https://playermusk.netlify.app/songs/Meri%20Banogi%20Kya%20%20320%20Kbps.mp3",
    "https://playermusk.netlify.app/songs/Muhabbat-Gumshuda-Meri(PagalWorlld.Com).mp3",
    "https://playermusk.netlify.app/songs/Pehla-Pyaar.mp3",
    "https://playermusk.netlify.app/songs/Pehle%20Bhi%20Main_320(PagalWorld.com.sb).mp3",
    "https://playermusk.netlify.app/songs/Qaafirana%20(2018).mp3",
    "https://playermusk.netlify.app/songs/Raatan%20Lambiyan_320(PagalWorld.com.se).mp3",
    "https://playermusk.netlify.app/songs/Rang%20Jo%20Lagyo%20-(PagalWorld.Ink).mp3",
    "https://playermusk.netlify.app/songs/Saanson%20Ko%20320%20Kbps.mp3",
    "https://playermusk.netlify.app/songs/Sach%20Keh%20Raha%20Hai%20Deewana%20-_320(PagalWorld.com.se).mp3",
    "https://playermusk.netlify.app/songs/Saware%20%20320Kbps.mp3",
    "https://playermusk.netlify.app/songs/Shayad%20%20320%20.mp3",
    "https://playermusk.netlify.app/songs/SHIKAYAT.mp3",
    "https://playermusk.netlify.app/songs/Tera%20Mera%20Rishta%20320%20Kbps.mp3",
    "https://playermusk.netlify.app/songs/Tera%20Zikr(PagalWorld.com.sb).mp3",
    "https://playermusk.netlify.app/songs/Tu%20Har%20Lamha%20320%20Kbps.mp3",
    "https://playermusk.netlify.app/songs/Tu%20Hi%20Hai%20Aashiqui.mp3",
    "https://playermusk.netlify.app/songs/Tu%20jaane%20na.mp3",
    "https://playermusk.netlify.app/songs/Tum%20Hi%20Ho%20-%20Aashiqui%202%20320%20Kbps.mp3",
    "https://playermusk.netlify.app/songs/Tum%20Ho%20Mera%20Pyar.mp3",
    "https://playermusk.netlify.app/songs/Tum-Kyu-Chale-Aate-Ho_320(PaglaSongs).mp3",
    "https://playermusk.netlify.app/songs/uska%20hi%20banna.mp3",
    "https://playermusk.netlify.app/songs/Wajah%20Tum%20Ho%20128%20Kbps.mp3",
    "https://playermusk.netlify.app/songs/Ye-Kya-Baat-Hai-Aaj-Ki-Chandni-Me_320(PagalWorld)%20(1).mp3",
    "https://playermusk.netlify.app/songs/Yeh%20Jism%20-(PagalWorld.Ink).mp3",
    "https://playermusk.netlify.app/songs/Zara-Zara-Bahekta-Hai_320(PaglaSongs).mp3",
    "https://playermusk.netlify.app/songs/Zaroori%20Tha_320(PagalWorld.com.se).mp3",
    "https://playermusk.netlify.app/songs/Pokmon%20-%20Theme%20.mp3",
    "https://playermusk.netlify.app/songs/Senorita-(PagalSongs.Com.IN).mp3",
    "https://playermusk.netlify.app/songs/On-My-Way_320(PagalWorldl).mp3",
    "https://playermusk.netlify.app/songs/What%20Makes%20You%20Beautiful_320(PagalWorld.com.so).mp3",
    "https://playermusk.netlify.app/songs/Steal%20My%20Girl_320(PagalWorld.com.so).mp3",
    "https://playermusk.netlify.app/songs/Unstoppable_320(PagalWorld.com.so).mp3",
    "https://playermusk.netlify.app/songs/Cheap%20Thrills_320(PagalWorld.com.so).mp3",
    "https://playermusk.netlify.app/songs/Bye_320(PagalWorld.com.so).mp3",
    "https://playermusk.netlify.app/songs/Udta-Parinda_320(PagalWorldl).mp3",
    "https://playermusk.netlify.app/songs/Khwab%20-%20Iqlipse%20Nova.mp3",
    "https://playermusk.netlify.app/songs/Im-Faded_320(PagalWorld).mp3",
    "https://playermusk.netlify.app/songs/Alone_320(PagalWorld).mp3",
    "https://playermusk.netlify.app/songs/Love-Me-Like-You-Do(PagalNew.Com.Se).mp3",
    "https://playermusk.netlify.app/songs/Night-Changes-One-Direction(PaglaWorld.com.cm).mp3",
    "https://playermusk.netlify.app/songs/Nadaniya_320(PagalWorld.com.so).mp3",
    "https://playermusk.netlify.app/songs/Shape-Of-You(PagalNew.Com.Se).mp3",
    "https://playermusk.netlify.app/songs/Perfect%20-%20320Kbps-(Mr-Jat.in).mp3"
  ];
  console.log(songs)
  return songs;
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
    
}
    
async function main() {
     songs = await getSongs();
     playMusic(songs[0])
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

document.querySelector('.songCurrent').innerHTML=`${secondsToMinutesSeconds(currentSong.currentTime)}`
document.querySelector('.songDuration').innerHTML=`${secondsToMinutesSeconds(currentSong.duration)}`
document.querySelector('.circle').style.left = (currentSong.currentTime/currentSong.duration)* 99 + "%"

  });


  // add an event listner to seekbar
  document.querySelector('.seekBar').addEventListener('click',(e)=>{
    let persent = (e.offsetX/e.target.getBoundingClientRect().width) * 100
document.querySelector('.circle').style.left = persent + '%';
currentSong.currentTime = ((currentSong.duration)* persent)/100
})

document.querySelector('.hamburger').addEventListener('click',()=>{
  document.querySelector('.left').style.left = "0";
})


document.querySelector('.close').addEventListener('click',()=>{
  document.querySelector('.left').style.left = "-150%";
})

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
    playMusic(songs[index +1])
  }
});

currentSong.addEventListener("ended", () => {
  let index = songs.indexOf(currentSong.src);
  if (index < songs.length - 1) {
    playMusic(songs[index +1])
  }
  else{
    play.src = "play.svg";

  }
});

// add event listner to volume
document.querySelector('.range').getElementsByTagName('input')[0].value = 60;
currentSong.volume = .60;
document.querySelector('.range').getElementsByTagName('input')[0].addEventListener('change',(e)=>{
  // console.log(e.target.value)
  currentSong.volume = parseInt(e.target.value)/100
  if(currentSong.volume === 0){
    document.querySelector('.volume>img').src = 'mute.svg'
  }
  else{
    document.querySelector('.volume>img').src = 'volume.svg'
  }

 
})

document.querySelector('.volume>img').addEventListener('click', () => {
  const volumeImg = document.querySelector('.volume>img');
  const volumeSrc = volumeImg.src;

  if (volumeSrc.includes('volume.svg')) {
      volumeImg.src = 'mute.svg';
      currentSong.volume = 0; // Mute the song
  } else if (volumeSrc.includes('mute.svg')) {
      volumeImg.src = 'volume.svg';
      currentSong.volume = .50;
      document.querySelector('.range').getElementsByTagName('input')[0].value = 50;
  }
});


const card = document.querySelectorAll('.card')
card[0].addEventListener('click',()=>{
  playMusic(songs[50])
})


card[1].addEventListener('click',()=>{
  playMusic(songs[27])
})
card[2].addEventListener('click',()=>{
  playMusic(songs[73])
})

}

  



main();
