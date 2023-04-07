console.log("Welcome to spotify!!")
let songIndex=0
let audioElement=new Audio("1.mp3")
let masterPlay=document.getElementById('masterplay');
let myProgress=document.getElementById('myprogress');
var gif=document.getElementById('gif');
let songs=[
    {songName:'Baarishon_Mein',filePath:"1.mp3",coverPath:"1.jpg"},
    {songName:'Baarish_Ki_bhund',filePath:"2.mp3",coverPath:"1.jpg"},
    {songName:'BAARISHEIN_Stu',filePath:"3.mp3",coverPath:"1.jpg"},
    {songName:'Baarish_Yaariyan',filePath:"4.mp3",coverPath:"1.jpg"},
    {songName:'Baarish HalfGF',filePath:"5.mp3",coverPath:"1.jpg"},
    {songName:'Maan_Meri_Jaan',filePath:"6.mp3",coverPath:"1.jpg"},
]
masterplay.addEventListener('click',()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
       gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>
{
let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
// console.log(progress);
myProgress.value=progress;
})
myProgress.addEventListener('change',()=>
{
   audioElement.currentTime=parseInt((audioElement.duration*myProgress.value)/100)
})
 const makeallPlay=()=>
 {
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>
    {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
 }

 Array.from(document.getElementsByClassName('songItem')).forEach((element)=>
 {
    element.addEventListener('click',(e)=>
    {
        makeallPlay();
        index=parseInt(e.target.id);
        console.log(element)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`${index}.mp3`
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
 })
 