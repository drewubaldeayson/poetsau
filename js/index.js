let dateToday = new Date();
const months=['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const weekDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const monthToday = dateToday.getMonth()+1;
$("#year_copyright").html(dateToday.getFullYear());
$("#dayToday").html(weekDays[dateToday.getDay()]);
$("#dateToday").html(monthToday.length>0 ? monthToday: '0'.concat(monthToday)+"-"+dateToday.getDate()+"-"+dateToday.getFullYear());
$("#dateTodayWithAD").html(dateToday.getDate()+" "+months[monthToday]+" "+dateToday.getFullYear()+" A.D. Earth");

$("#year_clock").html(dateToday.getFullYear());

if(monthToday.toString().length==1){
    $("#innerWarped > .w"+(monthToday+2)).html(monthToday+`<span class="inner-clock-focus-dot"></span>`)
}





function openSearchForm_OnAnchorClick(){
    $('body').css("overflow-y","hidden");
    $("#search-lightbox-wrap").css("display","block");
}

function closeSearchForm_OnIconClick(){
    $('body').css("overflow-y","visible");
    $("#search-lightbox-wrap").css("display","none");
}
