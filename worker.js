onmessage = (e) => {
    console.log(e)
    if(e.Run == "DReaper"){
        vetord = timed.value.split("m").join("")
    console.log(vetord)
    let minutes = vetord;
    let seconds = 1;

    setInterval(function() {

        if(seconds == 0){
            minutes = minutes-1;
            seconds = 59;
            if(minutes == -1){
                reaperaudio.play();
                minutes = 59;
                seconds = 59;
            }
            seconds = 59;
        }
        else{
            seconds = seconds-1;
        }
        postMessage({Run:"DReaper",msg:minutes + "m " + seconds + "s "});
      //document.getElementById("DReaper").innerHTML = minutes + "m " + seconds + "s ";
    }, 1000);
    } 



}