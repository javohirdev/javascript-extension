function myClock() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();

    h = (hour < 10) ? "0" + hour : hour;
    m = (minute < 10) ? "0" + minute : minute;

    var time = h + ":" + m;
    document.getElementById("time").innerText = time;
    document.getElementById("time").textContent = time;

    setTimeout(myClock, 1000)
}

myClock();