console.log("Welcome to Ayshu Music Player")
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("E:/Ayshu Music Player/songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Nira", filepath:"songs/1.mp3", coverpath:"cover/cover1.jpeg"},
    {songName:"Heeriye", filepath:"songs/2.mp3", coverpath:"cover/cover2.jpeg"},
    {songName:"Railin Oligal", filepath:"songs/3.mp3", coverpath:"cover/cover3.jpeg"},
    {songName:"Beast mode", filepath:"songs/4.mp3", coverpath:"cover/cover4.jpeg"},
    {songName:"Kanave Kanave", filepath:"songs/5.mp3", coverpath:"cover/cover5.jpg"},
    {songName:"Hayada", filepath:"songs/6.mp3", coverpath:"cover/cover6.jpeg"},
    {songName:"Tere Vaste", filepath:"songs/7.mp3", coverpath:"cover/cover7.jpeg"},
    {songName:"Kannadi Poovuku", filepath:"songs/8.mp3", coverpath:"cover/cover8.jpeg"},
]

songItems.forEach((element,i) => {
  element.getElementsByTagName("img")[0].songs[i].coverpath();
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});



masterPlay.addEventListener('click',()=>{
      if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
      }
      else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
      }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
  // Update Seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
  myProgressBar.value = progress;
})

audioElement.addEventListener('timeupdate', ()=>{ 
  // Update Seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
  myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.remove('fa-circle-pause');
      element.classList.add('fa-circle-play');
  })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    console.log(e.target);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.remove('fa-circle-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  })
})
document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=7){
      songIndex = 0
  }
  else{
      songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
      songIndex = 0
  }
  else{
      songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
})