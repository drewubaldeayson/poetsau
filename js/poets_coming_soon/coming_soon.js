let dateToday = new Date();
const months=['','January','February','March','April','May','June','July','August','September','October','November','December'];
const monthToday = dateToday.getMonth()+1;
const mainDateToday = dateToday.getDate();
const mainYearToday = dateToday.getFullYear();

$("#date_today").html(months[monthToday]+" "+mainDateToday.toString().concat(",")+" "+mainYearToday);
