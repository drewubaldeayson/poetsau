let dateToday = new Date();
const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthToday = dateToday.getMonth() + 1;
const mainDateToday = dateToday.getDate();
const numericalMonth = monthToday.toString().length == 1 ? "0".concat(monthToday) : monthToday;

$("#date_text").html(numericalMonth + "." + dateToday.getDate() + "." + dateToday.getFullYear() + " A.D. Earth");

Number.prototype.pad = function (n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
};

function updateClock() {
    let now = new Date();
    var milli = now.getMilliseconds(),
        sec = now.getSeconds(),
        min = now.getMinutes(),
        hou = now.getHours(),
        houValue = hou.pad(2),
        minValue = min.pad(2),
        secValue = sec.pad(2);
    document.getElementById("clock_text").firstChild.nodeValue = houValue + ":" + minValue + ":" + secValue + "." + milli
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}
