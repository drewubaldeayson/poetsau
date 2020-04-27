let dateToday = new Date();
const months=['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const weekDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const monthToday = dateToday.getMonth()+1;
const mainDateToday = dateToday.getDate();

$("#year_copyright").html(dateToday.getFullYear());
$("#dayToday").html(weekDays[dateToday.getDay()]);
$("#dateToday").html(monthToday.length>0 ? monthToday: '0'.concat(monthToday)+"-"+dateToday.getDate()+"-"+dateToday.getFullYear());
$("#dateTodayWithAD").html(dateToday.getDate()+" "+months[monthToday]+" "+dateToday.getFullYear()+" A.D. Earth");

$("#year_clock").html(dateToday.getFullYear());

if(monthToday.toString().length==1){
    $("#innerWarped > #"+monthToday+"_inner").html(monthToday+`<span class="inner-clock-focus-dot"></span>`)
    $(".inner-clock-focus-dot").css("margin-left","3px");
} else{
    $("#innerWarped > #"+monthToday+"_inner").html(monthToday.toString().substring(1)+`<span class="inner-clock-focus-dot"></span>`)
    $(".inner-clock-focus-dot").css("margin-left","-10px");
}   

if(mainDateToday.toString().length==1){
    $("#warped > #"+mainDateToday+"_outer").html(mainDateToday+`<span class="clock-focus-dot"></span>`)
    $(".clock-focus-dot").css("margin-left","2");
} else{
    $("#warped > #"+mainDateToday+"_outer").html(mainDateToday.toString().substring(1)+`<span class="clock-focus-dot"></span>`)
    $(".clock-focus-dot").css("margin-left","-5");
}   

for(var i=19;i<=31;i++){
    $("#warped > #"+i+"_outer").css("color","rgba(255, 255, 255, 0.3)")
    $("#warped > #"+i+"_outer_pos0").css("color","rgba(255, 255, 255, 0.3)")
}


function openSearchForm_OnAnchorClick(){
    $('body').css("overflow-y","hidden");
    $("#search-lightbox-wrap").css("display","block");
}

function closeSearchForm_OnIconClick(){
    $('body').css("overflow-y","visible");
    $("#search-lightbox-wrap").css("display","none");
}
