
  function startTimer(){    
        // Set the date we're counting down to
    var countDownDate = new Date("Mar 20, 2020 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
        }
        startTimer(); 
            
        
        function startClock() {
          var today = new Date();
          var h = today.getHours();
          var m = today.getMinutes();
          var s = today.getSeconds();
          var n = today.toDateString();
          
          var meridiem = h >= 12 ? 'pm' : 'am';  
          m = checkTime(m);
          s = checkTime(s);
          document.getElementById('currentTime').innerHTML =
          h + ":" + m + ":" + s + " " + meridiem;
          document.getElementById('time').innerHTML = n + ' ';
          var t = setTimeout(startClock, 500);
        }
        function checkTime(i) {
          if (i < 10) {
              i = "0" + i};  // add zero in front of numbers < 10
          return i;
        }
        startClock(); 

function timer(seconds){
  const now = Date.now();
  const then = now + seconds * 1000;
  
  setInterval(() => {
    const secondsLeft = (then - Date.now()) / 1000;
    console.log(secondsLeft);
  }, 1000); 
}
testTimer();

