var showCurrentTime = function()
{
    var clock = document.getElementById('clock'); 
    var currentTime = new Date();
    var h = currentTime.getHours(); 
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    m = checkTime(m);
    s = checkTime(s); 
    var clockTime = hours + ":" + minutes + ":" + seconds;
    clock.innerText = clockTime; 
}

var updateClock = function(){
    
}

function checkTime(i){
    if(i<10) {i = "0" + i};
    return i; 
}