// Initialize alarm sound


const minatoaudio = document.getElementById("minato_audio");
const reaperaudio = document.getElementById("reaper_audio");
const checkminato = document.getElementById("checkm");
const checkdreaper = document.getElementById("checkd");
const timem = document.getElementById("timem");
const timed = document.getElementById("timed");


const myWorker = new Worker("./worker.js");
reaperaudio.src = "https://www.myinstants.com/media/sounds/ussr1.mp3";
reaperaudio.load();

minatoaudio.src = "https://www.myinstants.com/media/sounds/money-button.mp3";
minatoaudio.load();

myWorker.onmessage = (e) => {
    e = e.data
    if(e.Run == "DReaper"){
        document.getElementById("DReaper").innerHTML = e.msg
    }
  };

checkminato.onclick = () => {
        document.getElementById("dtimem").style.display = 'none'
        document.getElementById("countm").style.display = ''
        
        timerminato();
}

checkdreaper.onclick = () => {
        document.getElementById("dtimed").style.display = 'none'
        document.getElementById("countd").style.display = ''
        myWorker.postMessage({Run:"DReaper",Tempo:timed.value.split("m").join("")});

}


function timerminato(){
    
    vetorm = timem.value.split("h")
    vetorm[1] = vetorm[1].split("m").join("")
    console.log(vetorm)
    let hours = vetorm[0];
    let minutes = vetorm[1];
    let seconds = 1;

    setInterval(function() {

        if(seconds == 0){
            minutes = minutes-1;
            seconds = 59;
            if(minutes == -1){
                hours = hours - 1
                if(hours == -1){
                    minatoaudio.play();
                    hours = 1;
                    minutes = 59;
                    seconds = 59;
                }
                minutes = 59;
                seconds = 59;
            }
        }
        else{
            seconds = seconds-1;
        }
        
      // Output the result in an element with id="demo"
      document.getElementById("Minato").innerHTML = hours + "h "
      + minutes + "m " + seconds + "s ";
    }, 1000);
}




