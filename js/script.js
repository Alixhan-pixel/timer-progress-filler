/*
 * Included Jquery
 */
// $(document).ready(function () {
//   $(".barClock").each(function () {
//     var barClock = $(this);
//     // let hoursProgress = $(barClock).find(".hours .progress");
//     let minutesProgress = $(barClock).find(".minutes .progress");
//     // let secondsProgress = $(barClock).find(".seconds .progress");
//     // let hoursValue = $(barClock).find(".hours .value");
//     let minutesValue = $(barClock).find(".minutes .value");
//     // let secondsValue = $(barClock).find(".seconds .value");
//     let interval = setInterval(() => {
//       let date = new Date();
//       let hours = date.getHours();
//       let minutes = date.getMinutes();
//       let seconds = date.getSeconds();
//       hoursProgress.css("width", getHoursPercentage(hours) + "%");
//       minutesProgress.css("width", getPercentage(minutes) + "%");
//       secondsProgress.css("width", getPercentage(seconds) + "%");
//       hoursValue.text(hours);
//       minutesValue.text(minutes);
//       secondsValue.text(seconds);
//     }, 1000);
//   });
//   const getPercentage = (x) => (x / 60) * 100;
//   const getHoursPercentage = (x) => (x / 24) * 100;
// });
var t = 0;

function myFunction() {
    var x = document.getElementById("frm1");
    hr = 0;
    min = 11;

    window.t = hr*3600 + min*60;
    window.per = window.t;
    //document.getElementById("demo").innerHTML = hr*3600 + min*60;
    timer();
}
function timer(){
    var temp = window.t;
    window.t = window.t-1;
    var h = Math.floor(temp/3600);
    var m = Math.floor((temp%3600)/60);
    var s = Math.floor((temp - h*3600 - m*60));
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("demo").innerHTML = h + "hr:" + m + "min:" + s + "sec";
    document.getElementById("progress-bar").style.width = (temp*100)/(window.per) + "%";
    console.log((temp*100)/(window.per) + "%")

    var t = setTimeout(timer,1000);

    /*if(temp<900){
        document.getElementById("progress-bar").style.backgroundColor = "red";
        document.getElementById("progress").style.borderColor = "red";
    }*/
    if (temp < 0) {
        clearInterval(t);
        document.getElementById("demo").innerHTML = "Service has Ended";
    }
}
function checkTime(i){
    if (i<10) { i = "0" + i }
    return i;
}
window.onbeforeunload = function() {
  return "Dude, are you sure you want to leave? Think of the kittens!";
}