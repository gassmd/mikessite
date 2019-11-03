// Set Date
var countDownDate = new Date("Jan 1, 2020 21:00:00").getTime();

// CountDown Action
var x = setInterval(function() {
    var now           = new Date().getTime();
    var distance      = countDownDate - now;
    var days          = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours         = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes       = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds       = Math.floor((distance % (1000 * 60)) / 1000);
    var output        = "", minutesResult, hoursResult, daysResult;

    if (days > 0) {
        daysResult = days;
    }
    if (hours > 0) {
        hoursResult = hours;
    }
    if (minutes > 0) {
        minutesResult = minutes;
    }
    
    document.getElementsByClassName("days")[0].innerHTML = daysResult;
    document.getElementsByClassName("hours")[0].innerHTML = hoursResult;
    document.getElementsByClassName("minutes")[0].innerHTML = minutesResult;
    document.getElementsByClassName("seconds")[0].innerHTML = seconds;
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementsByClassName('finalText')[0].innerHTML = "Süre Bitti";
    }
}, 100);