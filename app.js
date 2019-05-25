

setclock = () => {
const fullDate = new Date();
let hr = fullDate.getHours();
let mins = fullDate.getMinutes();
let secs = fullDate.getSeconds();
if (hr < 10 ) { 
    hr = "0" + hr;
}if (mins < 10 ) { 
    mins = "0" + mins;
}
if (secs < 10 ) { 
    secs = "0" + secs;
}
      document.getElementById('hr').innerHTML = hr + ":";
    document.getElementById('mi').innerHTML = mins + ":"; 
    document.getElementById('ss').innerHTML = secs;
};

setInterval(setclock, 1000 );
