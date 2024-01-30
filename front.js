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
        console.log(e.msg);
        if(e.msg == "0m 0s"){

            reaperaudio.play();
        }
    }
    if(e.Run == "Minato"){
        document.getElementById("Minato").innerHTML = e.msg
        console.log(e.msg);
        if(e.msg == "0h 0m 0s"){

            minatoaudio.play();
        }
    }

  };

checkminato.onclick = () => {
        document.getElementById("dtimem").style.display = 'none'
        document.getElementById("countm").style.display = ''


}

checkdreaper.onclick = () => {
        document.getElementById("dtimed").style.display = 'none'
        document.getElementById("countd").style.display = ''
        myWorker.postMessage({Run:"DReaper",Tempo:timed.value.split("m").join("")});

}

