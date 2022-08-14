import data from "./assets/data.json" assert {type: 'json'};



// console.log(data)

const prefix = "https://www.youtube.com/embed/videoseries?list=";
// const source = document.getElementById("video-player").src
document.getElementById("video-player").src = prefix+data.videoId.Skills.algo[0];


var objectLength = Object.keys(data.videoId.Skills).length;
// for(var i=0;i<=objectLength;i++){
//     console.log("hi")
// }