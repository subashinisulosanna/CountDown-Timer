const dayE=document.getElementById('d')
const hoursE=document.getElementById('h');
const minutesE=document.getElementById('m');
const secondsE=document.getElementById('s');



const newYearDate="1 Jan 2022";
function fun()
{
    const newDate=new Date(newYearDate);
    const curDate=new Date();
    const dates=(newDate-curDate)/1000;
    const day=Math.floor(dates/3600/24);
    const hours=Math.floor(dates/3600)%24;
    const minutes=Math.floor(dates/60)%60;
    const seconds=Math.floor(dates)%60;

    dayE.innerHTML=formatTime(day);
    hoursE.innerHTML=formatTime(hours);
    minutesE.innerHTML=formatTime(minutes);
    secondsE.innerHTML=formatTime(seconds);


}
function formatTime(time){
    return time<10?(`0${time}`):time;
}
fun();
setInterval(fun,1000);