// Initialize alarm sound


const minatoaudio = document.getElementById("minato_audio");
const reaperaudio = document.getElementById("reaper_audio");
const chaveiroaudio = document.getElementById("chaveiro_audio");
const checkminato = document.getElementById("checkm");
const checkdreaper = document.getElementById("checkd");
const timem = document.getElementById("timem");
const timed = document.getElementById("timed");
const timec = document.getElementById("timec");
const checkc = document.getElementById("checkc");
const timet = document.getElementById("timet");
const checkt = document.getElementById("checkt");
const chaveirotaudio = document.getElementById("chaveirot_audio");

const myWorker = new Worker("./worker.js");
reaperaudio.src = "https://www.myinstants.com/media/sounds/ussr1.mp3";
reaperaudio.load();

minatoaudio.src = "https://www.myinstants.com/media/sounds/money-button.mp3";
minatoaudio.load();

chaveiroaudio.src = "https://www.myinstants.com/media/sounds/tuturu-okarin.mp3"
chaveiroaudio.load();

chaveirotaudio.src = "https://www.myinstants.com/media/sounds/the-ramones-blitzkrieg-bop2.mp3"
chaveirotaudio.load();


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
    if(e.Run == "Chaveiro"){
        document.getElementById("Chaveiro").innerHTML = e.msg
        console.log(e.msg);
        if(e.msg == "0m 0s"){

            chaveiroaudio.play();
        }
    }
    if(e.Run == "ChaveiroTopo"){
        document.getElementById("Chaveirot").innerHTML = e.msg
        console.log(e.msg);
        if(e.msg == "0m 0s"){

            chaveirotaudio.play();
        }
    }

  };

checkminato.onclick = () => {
        document.getElementById("dtimem").style.display = 'none'
        document.getElementById("countm").style.display = ''
        myWorker.postMessage({Run:"Minato",Tempo:timem.value.split("h")});

}

checkdreaper.onclick = () => {
        document.getElementById("dtimed").style.display = 'none'
        document.getElementById("countd").style.display = ''
        myWorker.postMessage({Run:"DReaper",Tempo:timed.value.split("m").join("")});

}


checkc.onclick = () => {
    document.getElementById("dtimec").style.display = 'none'
    document.getElementById("countc").style.display = ''
    myWorker.postMessage({Run:"Chaveiro",Tempo:timec.value.split("m").join("")});

}

checkt.onclick = () => {
    document.getElementById("dtimet").style.display = 'none'
    document.getElementById("countt").style.display = ''
    myWorker.postMessage({Run:"ChaveiroTopo",Tempo:timet.value.split("m").join("")});

}

