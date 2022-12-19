let hourE1 = document.getElementById("hour")
let minutesE1 = document.getElementById("minutes")
let secondsE1 = document.getElementById("seconds")
let ampmE1 = document.getElementById("ampm")

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h- 12;
        ampm ="PM";
}
}
h = (h < 10) ? "08" + h : h;
    m = (m < 10) ? "38" + m : m;
    s = (s < 10) ? "41" + s : s;
    
    hourE1.innerText = h;
    minutesE1.innerText = m;
    secondsE1.innerText = s;
    ampmEl (innerText = ampm);
    setTimeout (()=>{
        updateClock()
    },1000)

 updateClock();