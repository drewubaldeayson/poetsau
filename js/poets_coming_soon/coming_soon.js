let dateToday = new Date();
let months=['','January','February','March','April','May','June','July','August','September','October','November','December'];
let monthToday = dateToday.getMonth()+1;
let mainDateToday = dateToday.getDate();
let mainYearToday = dateToday.getFullYear();

if (mainDateToday < 10) { 
  mainDateToday = '0' + mainDateToday; 
} 
if (monthToday < 10) { 
  monthToday = '0' + monthToday; 
} 

var today = mainDateToday + ' • ' + monthToday + ' • ' + mainYearToday; 
$("#date_today").html(`${today} A.D. EARTH`);
