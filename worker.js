onmessage = (e) => {
    console.log(e)
    e = e.data;
    if(e.Run == "DReaper"){
        vetord = e.Tempo
    console.log(vetord)
    let minutes = vetord;
    let seconds = 1;

    setInterval(function() {

        if(seconds == 0){
            minutes = minutes-1;
            seconds = 59;
            if(minutes == -1){
                minutes = 59;
                seconds = 59;
            }
            seconds = 59;
        }
        else{
            seconds = seconds-1;
        }
        postMessage({Run:"DReaper",msg:minutes + "m " + seconds + "s"});
      //document.getElementById("DReaper").innerHTML = minutes + "m " + seconds + "s ";
    }, 1000);
    } 
    if(e.Run == "Minato"){
        vetorm = e.Tempo 
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
          postMessage({Run:"Minato",msg:hours + "h "+ minutes + "m " + seconds + "s"});
        }, 1000);
}
if(e.Run == "Chaveiro"){
    vetord = e.Tempo
console.log(vetord)
let minutes = vetord;
let seconds = 1;

setInterval(function() {

    if(seconds == 0){
        minutes = minutes-1;
        seconds = 59;
        if(minutes == -1){
            minutes = 59;
            seconds = 59;
        }
        seconds = 59;
    }
    else{
        seconds = seconds-1;
    }
    postMessage({Run:"Chaveiro",msg:minutes + "m " + seconds + "s"});
  //document.getElementById("DReaper").innerHTML = minutes + "m " + seconds + "s ";
}, 1000);
}
}