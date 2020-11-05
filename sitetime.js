// function siteTime(){
//     window.setTimeout("siteTime()", 1000);
    // var today = new Date()
    // var todayYear = today.getFullYear()
    // var todayMonth = today.getMonth()
    // var todayDate = today.getDate()
    // var todayHour = today.getHours()
    // var todayMinute = today.getMinutes()
    // var todaySecond = today.getSeconds()
//     var seconds = 1000
//     var minutes = seconds * 60
//     var hours = minutes * 60
//     var days = hours * 24
//     var years = days * 365
//     /* Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳) 
//     year - 作为date对象的年份，为4位年份值
//     month - 0-11之间的整数，做为date对象的月份
//     day - 1-31之间的整数，做为date对象的天数
//     hours - 0(午夜24点)-23之间的整数，做为date对象的小时数
//     minutes - 0-59之间的整数，做为date对象的分钟数
//     seconds - 0-59之间的整数，做为date对象的秒数
//     microseconds - 0-999之间的整数，做为date对象的毫秒数 */
//     var t1 = Date.UTC(2020,10,23,06,30,55)
//     var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond)
//     var diff = t2-t1
//     var diffYears = Math.floor(diff/years)
//     var diffDays = Math.floor((diff/days)-diffYears*365)
//     var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours)
//     var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes)
//     var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds)
//     /* document.getElementById("sitetime").innerHTML=" 已运行"+diffYears+" 年 "+diffDays+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒" */
//     // document.getElementById("sitetime").innerHTML="很努力地存活了 "+(diffYears*365+diffDays)+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒"
      
// }

function sitetime(){
window.setTimeout("siteTime()", 1000);
var today = new Date()
var todayYear = today.getFullYear()
var todayMonth = today.getMonth()
var todayDate = today.getDate()
var todayHour = today.getHours()
var todayMinute = today.getMinutes()
var todaySecond = today.getSeconds()
// 返回当前年份的天数
function daysInYear(year){
    if((year%100 == 0 && year%400==0 ) || year % 4 == 0) return 366;
    else return 365;
}
// 返回当前年份2月的天数
function daysInMonth(year){
    if((year%100 == 0 && year%400==0 ) || year % 4 == 0)return 29;
    else return 28;
}
/* 返回当前年份到指定年份的天数*/
function daysDurYears(before){
    let diff = 0;
    for (let i = 0; i < (todayYear-before); i++) diff=diff+(daysInYear(before+i));
    return diff;
}
// 返回年初到当前月份前一月份的总天数
function dayDurMonths(year,month){
    switch ((month-1)) {
        case 1:
            return 31;
            break;
        case 2:
            return (31+daysInMonth(year));
            break;
        case 3:
            return (31*2+daysInMonth(year));
            break;
        case 4:
            return (31*2+30+daysInMonth(year));
            break;
        case 5:
            return (31*3+30+daysInMonth(year));
            break;
        case 6:
            return (31*3+30*2+daysInMonth(year));
            break;
        case 7:
            return (31*4+30*2+daysInMonth(year));
            break;
        case 8:
            return (31*5+30*2+daysInMonth(year));
            break;
        case 9:
            return (31*5+30*3+daysInMonth(year));
            break;
        case 10:
            return (31*6+30*3+daysInMonth(year));
            break;
        case 11:
            return (31*6+30*4+daysInMonth(year));
            break;
        case 12:
            return (31*7+30*4+daysInMonth(year));
            break;
        default:
            return 0;
            break;
    }
}
// 从指定年份的月份到当前年份的月份的当天的天数
function diffDays(year,month,day) {
    return daysDurYears(year)+dayDurMonths(month)+day;
}
// 求指定日期到现在的天数
function daysToNow(year,month,day) {return (daysDurYears(year)-dayDurMonths(year,month)-day+todayDate+dayDurMonths(todayYear,todayMonth+1))};

/* document.getElementById("sitetime").innerHTML=" 已运行"+diffYears+" 年 "+diffDays+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒" */
// document.getElementById("sitetime").innerHTML="很努力地存活了 "+(daysToNow(2020,10,23))+" 天 "+todayHour+" 小时 "+todayMinute+" 分钟 "+todaySecond+" 秒"
console.log(daysToNow(2020,10,23),todayHour,todayMinute,todaySecond);
}
sitetime();

   